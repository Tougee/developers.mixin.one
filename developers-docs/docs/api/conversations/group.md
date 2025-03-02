---
title: Manage Groups
sidebar_position: 3
---

import {
  APIMetaPanel,
  APIRequest,
  APIEndpoint,
  APIParams,
  APIPayload,
} from "@site/src/components/api";

import RespConv from "../../_partials/_resp.conv.md";

## Update Group

### POST /conversations/:id

Updating here is mainly about group chats, such as updating group announcements, joining groups, exiting, muting, and other operations.

After the following operations are successful, complete conversation data will be returned, including group members.

<APIEndpoint url="/conversations/:id" />

<APIMetaPanel scope="Authorized" />

<APIParams p-id="The conversation's id." p-id-required={true} />

<APIPayload>{`{
  "name":         "New group name, 512 characters at most.",
  "announcement": "Group Announcements, 1024 characters at most.",
}
`}</APIPayload>

:::info
Every time the field is updated, all group members can see an eye-catching group announcement reminder bar.
:::

<APIRequest
  title="Update Conversation info by ID"
  method="POST"
  url="/conversations/928c5c40-769c-3e97-8387-fb1ae0645311 --data PAYLOAD"
/>

<RespConv />

## Manage Group Member

### POST /conversations/:code_id/join

Join the group via link. The `code_id` is an ID to join the current group, which is returned by `GET /conversation/:id` and generated by `POST /conversations/:id/rotate`.

### POST /conversations/:id/participants/ADD

If you are the owner or admin of this group conversation, you can add other users to the group by calling this API.

the payload:

```json
[
  { "user_id": "" },
  ...
]
```

### POST /conversations/:id/participants/REMOVE

If you are the owner or admin of this group conversation, you can remove a member from the group.

the payload:

```json
[
  { "user_id": "" },
  ...
]
```

### POST /conversations/:id/rotate

Reset invitation link and `code_id`.

### POST /conversations/:id/exit

Leave the current group.

## Manage Administrators

Only the owners can set or cancel administrators

### POST /conversations/:id/participants/ROLE

Set or revoke admin privileges for a user.

The request body of setting admin privileges:

```json
[{ "user_id": "", "role": "ADMIN" }]
```

The request body of remove admin privileges:

```json
[{ "user_id": "", "role": "" }]
```

## Mute Group

Muted conversations will still receive messages, but without notifications.

### POST /conversations/:id/mute

Request body data:

| Parameter    |  Type  | Description                                                                                                         |
| :----------- | :----: | :------------------------------------------------------------------------------------------------------------------ |
| duration     | Int64  | In seconds, setting to 0 means unmute, other values means mute time, for example, setting 28,800 means mute 8 hours |
| category     | String | Optional, only CONTACT is allowed                                                                                   |
| participants | Array  | Optional, participants in the conversation, only required when category is CONTACT.                                 |

If you mute users or bots, it is strongly recommended to pass the category and participants parameters, otherwise calling the mute interface without creating a conversation will return an error.
