export default {
  msg_audio: `
  {
    "id": "UUID",
    "action": "CREATE_MESSAGE",
    "params": {
      "conversation_id": "UUID",
      "category": "PLAIN_AUDIO",
      "status": "SENT",
      "message_id": "UUID",
      "data": "Base64 encoded data"
    }
  }

  // data structure
  {
    "id": "UUID",
    "action": "CREATE_MESSAGE",
    "params": {
      "conversation_id": "UUID",
      "category": "PLAIN_AUDIO",
      "status": "SENT",
      "message_id": "UUID",
      "data": "Base64 encoded data"
    }
  }
`,

  msg_buttons: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "APP_BUTTON_GROUP",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
[
  {
    "label": "Mixin Website",
    "color": "#ABABAB",
    "action": "https://mixin.one"
  }
  ...
]`,

  msg_card: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "APP_CARD",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "app_id": "7404c815-0393-4ea3-b9f2-b08efe4c72da",
  "icon_url": "https://mixin.one/assets/98b586edb270556d1972112bd7985e9e.png",
  "title": "Mixin",
  "description": "Hello World.",
  "action": "https://mixin.one",
  "shareable": true
}`,

  msg_contact: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
      "conversation_id": "UUID",
      "category": "PLAIN_CONTACT",
      "status": "SENT",
      "message_id": "UUID",
      "data": "Base64 encoded data"
  }
}

// data structure
{
  "user_id": "UUID"
}`,

  msg_file: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "PLAIN_DATA",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "attachment_id": "Read From POST /attachments",
  "mime_type": "application/pdf",
  "size": 1024,
  "name": "2020-12-12.pdf"
}`,

  msg_image: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "PLAIN_IMAGE",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "attachment_id": "read From POST /attachments",
  "mime_type": "image/jpeg",
  "width": 1024,
  "height": 1024,
  "size": 1024,
  "thumbnail": "base64 encoded"
}`,

  msg_live: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "PLAIN_LIVE",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "width": 650,
  "height": 366,
  "thumb_url": "https://mixin.one/logo.png",
  "url": "https://mixin.one/live.m3u8"
}`,

  msg_location: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "PLAIN_LOCATION",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "longitude": 126.5893955829421,
  "latitude": 53.47845177824066,
  "name": "China",
  "address": "China Beijing"
}`,

  msg_post: `{
  "id": "UUID" // generated by client,
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "PLAIN_POST",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}`,

  msg_sticker: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "PLAIN_STICKER",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "sticker_id": "UUID"
}`,

  msg_text: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "PLAIN_TEXT",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}`,

  pin_message: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "MESSAGE_PIN",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "action": "PIN", // PIN or UNPIN
  "message_ids": ["ab56be4c-5b20-41c6-a9c3-244f9a433f35","ab56be4c-5b20-41c6-a9c3-244f9a433f35"]
}`,

  msg_transfer: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "SYSTEM_ACCOUNT_SNAPSHOT",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "type": "transfer",
  "snapshot_id": "ab56be4c-5b20-41c6-a9c3-244f9a433f35",
  "opponent_id": "a465ffdb-4441-4cb9-8b45-00cf79dfbc46",
  "asset_id": "43d61dcd-e413-450d-80b8-101d5e903357",
  "amount": "-10",
  "trace_id": "7c67e8e8-b142-488b-80a3-61d4d29c90bf",
  "memo": "hello",
  "created_at": "2018-05-03T10:08:34.859542588Z"
}`,

  msg_video: `{
  "id": "UUID",
  "action": "CREATE_MESSAGE",
  "params": {
    "conversation_id": "UUID",
    "category": "PLAIN_VIDEO",
    "status": "SENT",
    "message_id": "UUID",
    "data": "Base64 encoded data"
  }
}

// data structure
{
  "attachment_id": "Read From POST /attachments",
  "mime_type": "video/mp4",
  "width": 1024,
  "height": 1024,
  "size": 1024,
  "duration": 60,
  "thumbnail": "base64 encoded"
}`,

  msgs: `[
  {
    "conversation_id": "UUID",
    "recipient_id": "UUID",
    "message_id": "UUID",
    "category": "",
    "representative_id": "UUID",
    "quote_message_id": "UUID",
    "data": "Base64 encoded data"
  },
  ...
]`,

  addr: `{
  "data":{
    "type":       "address",
    "address_id": "e1524f3c-2e4f-411f-8a06-b5e1b1601308",
    "asset_id":   "43d61dcd-e413-450d-80b8-101d5e903357",
    "destination":"0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0",
    "tag":        "",
    "label":      "Eth Address",
    "fee":        "0.016",
    "reserve":    "0",
    "dust":       "0.0001",
    "updated_at": "2018-07-10T03:58:17.5559296Z"
  }
}`,

  addrs: `{
  "data":[
    {
      "type":       "address",
      "address_id": "e1524f3c-2e4f-411f-8a06-b5e1b1601308",
      "asset_id":   "43d61dcd-e413-450d-80b8-101d5e903357",
      "destination":"0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0",
      "tag":        "",
      "label":      "Eth Address",
      "fee":        "0.016",
      "reserve":    "0",
      "dust":       "0.0001",
      "updated  _at": "2018-07-10T03:58:17.5559296Z"
    },
    ...
  ]
}`,

  apps: `{
  "data": [
    {
        "type": "app",
        "user_id": "06aed1e3-bd77-4a59-991a-5bb5ae6fbb09",
        "app_id": "c94ac88f-4671-3976-b60a-09064f1811e8",
        "created_at": "2017-12-23T18:23:26.996149Z"
    }
    ...
  ]
}`,

  asset: `{
  "data":{
    "type":         "asset",
    "asset_id":     "3596ab64-a575-39ad-964e-43b37f44e8cb",
    "chain_id":     "43d61dcd-e413-450d-80b8-101d5e903357",
    "symbol":       "eosDAC",
    "name":         "eosDAC Community Owned EOS Block Producer ERC20 Tokens",
    "icon_url":     "https://images.mixin.one/HovctUnrBkLPlDotWvWPsIuFb8qKrLddwF5-f2Fi9q9uO829YB2qGITgOd2YmTMKnGg_z9XrVYzEwFE_rD_REz9C=s128",
    "balance":      "203.975",
    "destination":  "0x2CEab41716F4ce0Db36B6FdABEdc6a0BE5DC442B",
    "tag":          "",
    "price_btc":    "0",
    "price_usd":    "0",
    "change_btc":   "1",
    "change_usd":   "2",
    "asset_key":    "",
    "mixin_id":     "b6b8d99b7cecf810980aaeef17a48f82ed573f2552517d4932d195181bc6ba11",
    "confirmations":    10,
    "capitalization":   1000.3
  }
}`,

  assets_network: `{
  "data":[{
      "type":           "asset",
      "asset_id":       "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
      "chain_id":       "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
      "symbol":         "BTC",
      "name":           "Bitcoin",
      "icon_url":       "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
      "price_btc":      "1",
      "price_usd":      "14996.98",
      "change_btc":     "0",
      "change_usd":     "-0.03773542533280206",
      "asset_key":      "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
      "mixin_id":       "fe6b7788944d328778f98e3e81588215b5a07de4f9a4a7de4db4535b404e65db",
      "reserve":        "0",
      "confirmations":  3,
      "capitalization": 144241811.6455701,    // Market cap.
      "liquidity":      "9618.05721189"            // The amount of this asset in Minxin.
  },
  ...
  ]
}`,

  assets: `{
  "data": [
    {
      "type":         "asset",
      "asset_id":     "3596ab64-a575-39ad-964e-43b37f44e8cb",
      "chain_id":     "43d61dcd-e413-450d-80b8-101d5e903357",
      "symbol":       "eosDAC",
      "name":         "eosDAC Community Owned EOS Block Producer ERC20 Tokens",
      "icon_url":     "https://images.mixin.one/HovctUnrBkLPlDotWvWPsIuFb8qKrLddwF5-f2Fi9q9uO829YB2qGITgOd2YmTMKnGg_z9XrVYzEwFE_rD_REz9C=s128",
      "balance":      "203.975",
      "destination":  "0x2CEab41716F4ce0Db36B6FdABEdc6a0BE5DC442B",
      "tag":          "",
      "price_btc":    "0",
      "price_usd":    "0",
      "change_btc":   "1",
      "change_usd":   "2",
      "asset_key":    "",
      "mixin_id":     "b6b8d99b7cecf810980aaeef17a48f82ed573f2552517d4932d195181bc6ba11",
      "confirmations":    10,
      "capitalization":   1000.3
    },
    ...
  ]
}`,

  attachment: `{
  "data": {
    "type": "attachment",
    "attachment_id": "7a54e394-1626-4cd4-b967-543932c2a032",
    // the url to view the attachment
    "view_url": " ... ",
    // the url to upload the attachment
    "upload_url": " ... ",
  }
}`,

  circle: `{
  "circle_id":  "a465ffdb-4441-4cb9-8b45-00cf79dfbc46",
  "name":       "Circle Name",
  "created_at": "2018-05-29T09:31:04.202186212Z"
}`,

  circles: `{
  "data":[
    {
      "circle_id":  "a465ffdb-4441-4cb9-8b45-00cf79dfbc46",
      "name":       "Circle Name",
      "created_at": "2018-05-29T09:31:04.202186212Z"
    }
    ...
  ]
}`,

  conv: `{
  "data": {
    "type":             "conversation",
    "conversation_id":  "928c5c40-769c-3e97-8387-fb1ae0645311",
    "creator_id":       "8dcf823d-9eb3-4da2-8734-f0aad50c0da6",
    "category":         "GROUP",
    "name":             "",
    "icon_url":         "",
    "announcement":     "",
    "created_at":       "2018-05-16T12:34:44.134238105Z",
    "code_id":          "d8244b92-30e9-44b5-bfb0-ce597c788125",
    "code_url":         "https://mixin.one/codes/d8244b92-30e9-44b5-bfb0-ce597c788125",
    "mute_until":       "2018-05-16T12:34:44.143010035Z",
    "participants": [
        {
            "type":     "participant",
            "user_id":  "8dcf823d-9eb3-4da2-8734-f0aad50c0da6",
            "role":     "OWNER",
            "created_at": "2018-05-16T12:34:44.134238105Z"
        },
        {
            "type":     "participant",
            "user_id":  "e8e5b807-fa8b-455a-8dfa-b189d28310ff",
            "role":     "",
            "created_at": "2018-05-16T12:34:44.149277666Z"
        }
    ]
  }
}`,

  fee: `{
  "data": {
    "type":     "fee",
    "asset_id": "43d61dcd-e413-450d-80b8-101d5e903357",
    "amount":   "0.01"
  }
}`,

  snapshot: `{
  "data": {
    "amount":     "-1688168",
    "asset": {
      "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",
      "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
      "icon_url": "https://images.mixin.one/0sQY63dDMkWTURkJVjowWY6Le4ICjAFuu3ANVyZA4uI3UdkbuOT5fjJUT82ArNYmZvVcxDXyNjxoOv0TAYbQTNKS=s128",
      "name":     "Chui Niu Bi",
      "symbol":   "CNB",
      "type":     "asset"
    },
    "created_at": "2018-05-29T09:31:04.202186212Z",
    "data":       "",
    "snapshot_id":"529934b0-abfd-43ab-9431-1805773000a4",
    "source":     "TRANSFER_INITIALIZED",
    "type":       "snapshot",      // Options only for user (or App) who has access.
    // 4 private fields that only be returend with correct permission
    "user_id":    "06aed1e3-bd77-4a59-991a-5bb5ae6fbb09",
    "trace_id":   "7c67e8e8-b142-488b-80a3-61d4d29c90bf",
    "opponent_id":"a465ffdb-4441-4cb9-8b45-00cf79dfbc46",
    "data":       "Transfer!"
  }
}`,

  snapshots: `{
  "data": [
    {
      "amount":     "-1688168",
      "asset": {
        "asset_id": "965e5c6e-434c-3fa9-b780-c50f43cd955c",
        "chain_id": "43d61dcd-e413-450d-80b8-101d5e903357",
        "icon_url": "https://images.mixin.one/0sQY63dDMkWTURkJVjowWY6Le4ICjAFuu3ANVyZA4uI3UdkbuOT5fjJUT82ArNYmZvVcxDXyNjxoOv0TAYbQTNKS=s128",
        "name":     "Chui Niu Bi",
        "symbol":   "CNB",
        "type":     "asset"
      },
      "created_at": "2018-05-29T09:31:04.202186212Z",
      "data":       "",
      "snapshot_id":"529934b0-abfd-43ab-9431-1805773000a4",
      "source":     "TRANSFER_INITIALIZED",
      "type":       "snapshot",      // Options only for user (or App) who has access.
      // 4 private fields that only be returend with correct permission
      "user_id":    "06aed1e3-bd77-4a59-991a-5bb5ae6fbb09",
      "trace_id":   "7c67e8e8-b142-488b-80a3-61d4d29c90bf",
      "opponent_id":"a465ffdb-4441-4cb9-8b45-00cf79dfbc46",
      "data":       "Transfer!"
    },
    ...
  ]
}`,

  transfer_mainnet: `{
  "data":{
    "type":         "transfer",
    "snapshot_id":  "ab56be4c-5b20-41c6-a9c3-244f9a433f35",
    "opponent_key": "XINDEhAA8ArWDJBF5fJQvrtKdZQ4X28KmkScm5FtwdJGx9CiB1Hjadk4baMLMRjsGY5L8QDbVKuC7jvep1m8k4zZN7BGvvXP",
    "asset_id":     "43d61dcd-e413-450d-80b8-101d5e903357",
    "amount":       "-10",
    "trace_id":     "7c67e8e8-b142-488b-80a3-61d4d29c90bf",
    "memo":         "hello",
    "created_at":   "2018-05-03T10:08:34.859542588Z"
  }
}`,

  transfer_mainnet: `{
  "data":{
    "type":               "transfer",
    "snapshot_id":        "ab56be4c-5b20-41c6-a9c3-244f9a433f35",
    "opponent_receivers": ["00c5a4ae-dcdc-48db-ab8e-a7eef69b441d","087e91ff-7169-451a-aaaa-5b3297411a4b","105f6e8b-d249-4b4d-9beb-e03cefaebc37"],
    "opponent_threshold": 2,
    "asset_id":           "43d61dcd-e413-450d-80b8-101d5e903357",
    "amount":             "-10",
    "trace_id":           "7c67e8e8-b142-488b-80a3-61d4d29c90bf",
    "memo":               "hello",
    "created_at":         "2018-05-03T10:08:34.859542588Z"
  }
}`,

  transfer: `{
  "data": {
    "type":         "transfer",
    "snapshot_id":  "ab56be4c-5b20-41c6-a9c3-244f9a433f35",
    "opponent_id":  "a465ffdb-4441-4cb9-8b45-00cf79dfbc46",
    "asset_id":     "43d61dcd-e413-450d-80b8-101d5e903357",
    "amount":       "-10",
    "trace_id":     "7c67e8e8-b142-488b-80a3-61d4d29c90bf",
    "memo":         "hello",
    "created_at":   "2018-05-03T10:08:34.859542588Z"
  }
}`,

  user_extra: `{
  "data":{
    "type":             "user",
    "user_id":          "773e5e77-4107-45c2-b648-8fc722ed77f5",
    "identity_number":  "7000",
    "phone":            "+8613801380138",
    "full_name":        "Team Mixin",
    "biography":        "",
    "avatar_url":       "https://images.mixin.one/E2y0BnTopFK9qey0YI-8xV3M82kudNnTaGw0U5SU065864SsewNUo6fe9kDF1HIzVYhXqzws4lBZnLj1lPsjk-0=s256",
    "relationship":     "STRANGER",
    "mute_until":       "0001-01-01T00:00:00Z",
    "created_at":       "2017-12-23T18:23:26.996149Z",
    "is_verified":      true,
    "session_id":       "a34c07a9-755d-4b54-94c5-e45e9a2dd43e",
    "pin_token":        "",
    "code_id":          "dabcf1c2-6a5e-4ea3-ad51-6e6641a06c7c",
    "code_url":         "https://mixin.one/codes/dabcf1c2-6a5e-4ea3-ad51-6e6641a06c7c",
    "has_pin":          true,
    "has_emergency_contact":            true,
    "receive_message_source":           "CONTACTS",
    "accept_conversation_source":       "CONTACTS",
    "fiat_currency":                    "USD",
    "transfer_notification_threshold":  0,
  }
}`,

  user_net: `{
  "data":{
    "user_id":    "06aed1e3-bd77-4a59-991a-5bb5ae6fbb09",     // User Id
    "session_id": "a34c07a9-755d-4b54-94c5-e45e9a2dd43e",  // Session Id
    "pin_token":  "",                                       // PIN
    "full_name":  "Bot User",                               // Nickname
    "biography":  "",                                       // Brief Intro
    "avatar_url": "",                                      // Avatar
    "created_at": "2018-05-03T06:03:56.867971412Z",        // Creation Timestamp
  }
}`,

  user: `{
  "data": {
    "type":             "user",
    "user_id":          "773e5e77-4107-45c2-b648-8fc722ed77f5",
    "identity_number":  "7000",
    "phone":            "+8613801380138",
    "full_name":        "Team Mixin",
    "biography":        "",
    "avatar_url":       "https://images.mixin.one/E2y0BnTopFK9qey0YI-8xV3M82kudNnTaGw0U5SU065864SsewNUo6fe9kDF1HIzVYhXqzws4lBZnLj1lPsjk-0=s256",
    "relationship":     "STRANGER",
    "mute_until":       "0001-01-01T00:00:00Z",
    "created_at":       "2017-12-23T18:23:26.996149Z",
    "is_verified":      true
  }
}`,

  users: `{
  "data": [
    {
      "type":             "user",
      "user_id":          "773e5e77-4107-45c2-b648-8fc722ed77f5",
      "identity_number":  "7000",
      "phone":            "+8613801380138",
      "full_name":        "Team Mixin",
      "biography":        "",
      "avatar_url":       "https://images.mixin.one/E2y0BnTopFK9qey0YI-8xV3M82kudNnTaGw0U5SU065864SsewNUo6fe9kDF1HIzVYhXqzws4lBZnLj1lPsjk-0=s256",
      "relationship":     "STRANGER",
      "mute_until":       "0001-01-01T00:00:00Z",
      "created_at":       "2017-12-23T18:23:26.996149Z",
      "is_verified":      true
    },
    ...
  ]
}`,

  payment: `{
  "data": {
    "type": "payment",
    "payment_id": "773e5e77-4107-45c2-b648-8fc722ed77f5",
    "asset_id": "43d61dcd-e413-450d-80b8-101d5e903357",
    "amount": "-10",
    "trace_id": "7c67e8e8-b142-488b-80a3-61d4d29c90bf",
    "memo": "hello",
    "threshold": 2,
    "receivers": ["7c67e8e8-b142-488b-80a3-61d4d29c90bf", "7c67e8e8-b142-488b-80a3-61d4d29c90bf", "7c67e8e8-b142-488b-80a3-61d4d29c90bf"],
    "created_at": "2017-12-23T18:23:26.996149Z",
  }
}`,
}
