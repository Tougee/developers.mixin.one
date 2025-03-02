<template>
  <div v-show="show" class="modal">
    <div class="mask">
      <transition name="fade-up">
        <div v-if="show && !snap_status" v-loading="loading" class="main">
          <d-header class="header">
            <div class="header-back" @click="back" slot="left">
              <img src="@/assets/img/app-svg/left.svg" />
            </div>
            <div slot="center">{{$t('wallet.title')}}</div>
          </d-header>
          <div class="content">
            <header :style="{opacity: active_asset.icon_url ? '1':'0'}">
              <img :src="active_asset.icon_url" />
              <p>{{active_asset.balance}} {{active_asset.symbol}}</p>
            </header>
            <ul>
              <li>
                <label>{{$t('wallet.amount')}}</label>
                <input v-model="submit_form.amount" />
              </li>
              <li>
                <label>PIN</label>
                <input maxlength="6" ref="pin_token" @input="change_style" />
              </li>
              <li>
                <label>Mixin ID / Mainnet Address</label>
                <input v-model="submit_form.opponent_id" />
              </li>
            </ul>
            <footer>
              <div class="btns">
                <button @click="clickSubmit" class="btns-copy primary">{{$t('button.withdrawal')}}</button>
                <button @click="clickCancel" class="btns-cancel primary">{{$t('button.cancel')}}</button>
              </div>
            </footer>
            <confirm
              :confirm_content="confirm_content"
              :confirm_modal="showWithdrawalConfirm"
              @confirm="confirmWithdrawal"
              @close_modal="closeWithdrawalConfirm"
            />
            <img @click="clickCancel" class="iconguanbi" src="@/assets/img/svg/close.svg" />
          </div>
        </div>
        <div v-if="show && snap_status" class="main snap-main">
          <d-header class="header">
            <div class="header-back" @click="back" slot="left">
              <img src="@/assets/img/app-svg/left.svg" />
            </div>
            <div slot="center">{{$t('wallet.snapshot_info')}}</div>
          </d-header>
          <div class="content snapshot">
            <h3>{{$t('wallet.snapshot_info')}}</h3>
            <div>
              <label>{{$t('wallet.snapshot.snapshot_id')}}</label>
              <p>{{transaction_info.snapshot_id}}</p>
            </div>
            <div>
              <label>{{$t('wallet.snapshot.trace_id')}}</label>
              <p>{{transaction_info.trace_id}}</p>
            </div>
            <div>
              <label>{{$t('wallet.snapshot.account')}}</label>
              <p>{{transaction_info.opponent_key}}</p>
            </div>
            <div>
              <label>{{$t('wallet.snapshot.amount')}}</label>
              <p>{{transaction_info.amount}}</p>
            </div>
            <div>
              <label>{{$t('wallet.snapshot.transaction_hash')}}</label>
              <p>{{transaction_info.transaction_hash}}</p>
            </div>
            <footer class="btns">
              <button @click="clickSubmit" class="btns-copy primary">{{$t('button.withdrawal')}}</button>
              <button @click="clickCancel" class="btns-cancel primary">{{$t('button.cancel')}}</button>
            </footer>
          </div>
          <img @click="clickCancel" class="iconguanbi" src="@/assets/img/svg/close.svg" />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import { validate } from 'uuid'
  import tools from "@/assets/js/tools"
  import DHeader from "@/components/DHeader"
  import Confirm from "@/components/Confirm";

  export default {
    name: "withdrawal-modal",
    components: { Confirm, DHeader },
    props: ["active_asset", "app_id", "show", "client"],
    data() {
      return {
        submit_form: {
          amount: "",
          pin: "",
          opponent_id: ""
        },
        sid: "",
        uid: "",
        snap_status: false,
        loading: false,
        tmp_pin: "",
        transaction_info: {},
        showWithdrawalConfirm: false,
      }
    },
    watch: {
      app_id(val) {
        this.sid = this.$ls.get(uid).sid
        this.uid = val
      }
    },
    computed: {
      confirm_content() {
        const msg = this.$t('wallet.withdrawal_confirm');
        return msg
          .replace('{amount}', this.submit_form.amount)
          .replace('{token}', this.active_asset.symbol)
          .replace('{opponent}', this.submit_form.opponent_id)
      }
    },
    methods: {
      back() {
        this.$emit("close-modal")
      },
      isValidPin() {
        return this.tmp_pin && this.tmp_pin.length === 6 && parseInt(this.tmp_pin) > 100000;
      },
      async clickSubmit() {
        if (!this.isValidPin()) return this.$message.error({ message: this.$t('message.errors.pin_token_format'), showClose: true })
        this.showWithdrawalConfirm = true
      },
      clickCancel() {
        this.tmp_pin = ""
        this.snap_status = false
        this.transaction_info = {}
        this.$emit("close-modal")
      },
      async confirmWithdrawal() {
        this.closeWithdrawalConfirm()

        this.loading = true
        let transfer_status = await this.submit_withdrawal()
        this.loading = false

        if (transfer_status) {
          this.$message.success({
            message: this.$t("message.success.withdrawal"),
            showClose: true
          })
          if (this.submit_form.opponent_id.startsWith("XIN")) {
            this.$emit("update-list")
            this.snap_status = true
          } else {
            this.$emit("close-modal")
            this.$emit("update-list")
          }
          this.tmp_pin = ""
          this.submit_form = {}
        }
      },
      closeWithdrawalConfirm() {
        this.showWithdrawalConfirm = false
      },
      change_style() {
        let originVal = this.$refs.pin_token.value
        if (
          this.tmp_pin === undefined ||
          this.tmp_pin.length > originVal.length
        ) {
          this.tmp_pin = ""
        } else {
          let val = originVal.replace(/\D/g, "")
          this.tmp_pin += val
        }
        let valLength = this.tmp_pin.length
        let _pin = ""
        for (let i = 0; i < valLength; i++) {
          _pin += "*"
        }
        this.$refs.pin_token.value = _pin
      },
      async _get_opponent_id() {
        const { opponent_id } = this.submit_form
        const is_uuid = validate(opponent_id)
        let { user_id } = is_uuid ? await this.client.user.fetch(opponent_id) : await this.client.user.search(opponent_id)
        return user_id
      },
      async submit_withdrawal() {
        if (!this.tmp_pin) return false

        const is_transfers = !this.submit_form.opponent_id.startsWith("XIN")
        const type = is_transfers ? 'transfer' : 'raw'

        let { amount, opponent_id } = this.submit_form
        opponent_id = is_transfers ? await this._get_opponent_id() : opponent_id
        if (!opponent_id) return this.$message.error({ message: this.$t('message.errors.mixin_id'), showClose: true })
        const opponent = opponent_id.startsWith('XIN') ? { opponent_key: opponent_id } : { opponent_id }

        const params = {
          amount,
          asset_id: this.active_asset.asset_id,
          pin: this.tmp_pin,
          trace_id: tools.getUUID(),
          ...opponent
        };

        let res = is_transfers ? await this.client.transfer.toUser(params.pin, params) : await this.client.transfer.toAddress(params.pin, params)
        !is_transfers && (this.transaction_info = res)
        return res && res.type === type
      }
    },
    mounted() {
      this.uid = this.app_id

    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    bottom: 0;
    user-select: none;
  }

  .mask {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.34);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }

  .main {
    border-radius: 0.75rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    overflow: hidden;
  }

  .snap-main {
    width: 45rem;
  }

  .content {
    padding: 3rem;
  }

  .header {
    display: none;
  }

  .iconguanbi {
    position: absolute;
    top: 1.5625rem;
    right: 1.5625rem;
    color: #b8bdc7;
    cursor: pointer;
    padding: 0.3125rem;
  }

  header {
    text-align: center;

    img {
      width: 4.5rem;
      height: 4.5rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1.875rem;
      color: #a9b0bf;
      user-select: text;
    }
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    label {
      width: 5.625rem;
      font-weight: 700;
      text-align: left;
      margin-right: 1.25rem;
    }

    input {
      font-size: 1rem;
      width: 30.75rem;
      background: #f6f9ff;
      padding: 1.25rem .8rem;
      border-radius: 0.25rem;
    }
  }

  .btns {
    text-align: right;
    margin-top: 4rem;

    button {
      font-size: 0.875rem;
      width: 8.75rem;
      margin-left: 0.625rem;
    }

    .btns-cancel {
      background: #e5e7ec;
      color: #333;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: margin 0.3s, opacity 0.3s;
  }

  .fade-up-enter {
    margin-top: -1.25rem;
    opacity: 0;
  }

  .snapshot {
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    overflow: auto;

    h3 {
      text-align: center;
      margin: 0.75rem 0 1rem 0;
    }

    div {
      margin-bottom: 1rem;
      width: 100%;

      label {
        display: block;
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 1rem;
      }

      p {
        user-select: text;
        background: #f6f9ff;
        box-shadow: 0 0.0625rem 0.25rem 0 rgba(28, 77, 174, 0.1);
        border-radius: 0.375rem;
        padding: 1rem;
        word-break: break-all;
        font-size: 1rem;
      }
    }

    .btns {
      display: none;
    }
  }

  @media screen and (max-width: 48rem) {
    .main {
      top: 0;
      left: 0;
      transform: initial;
      background-color: #f6f7f9;
      border-radius: 0;
      height: 100%;
      width: 100%;
    }

    .header-back {
      width: 3.125rem;
      transform: translate(-1.5625rem);
      padding-left: 1.5625rem;

      img {
        height: 1.5rem;
        width: 1.5rem;
        transform: translate(0, 0.3125rem);
      }
    }

    .header {
      display: block;
    }

    .content {
      padding: 1.25rem;

      header p {
        color: #000;
        margin-bottom: 1rem;
      }

      .iconguanbi {
        display: none;
      }
    }

    .mask {
      .iconguanbi {
        display: none;
      }
    }

    li {
      flex-direction: column;

      label {
        width: initial;
        line-height: 1rem;
        margin-bottom: 1rem;
      }

      input {
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0.0625rem 0.25rem 0 rgba(28, 77, 174, 0.1);
        height: 3.125rem;
        padding: 0 1.25rem;
        font-weight: 500;
        font-size: 1rem;
      }
    }

    .btns {
      margin-top: 0;

      .btns-copy {
        display: block;
        float: none;
        margin: 0 auto;
        width: 7.875rem;
        height: 2.625rem;
        border-radius: 2.5rem;
        background: #3277ff;
        font-size: 1rem;
      }
    }

    .btns-cancel {
      display: none;
    }

    .snapshot {
      h3 {
        display: none;
      }
    }

    .fade-up-enter-active,
    .fade-up-leave-active {
      transition: none;
    }

    .fade-up-enter {
      margin-top: 0;
      opacity: 1;
    }
  }
</style>
