---
title: Read Fiat Exchange Rates
sidebar_position: 24
---

import {
  APIMetaPanel,
  APIRequest,
  APIEndpoint,
  APIParams,
  APIPayload,
} from "@site/src/components/api";

## GET /fiats

Returns a list of all fiat exchange rates based on US Dollar.

<APIEndpoint url="/fiats" />

<APIMetaPanel scope="Authorized" scopeNote="" />

<APIRequest title="Get Fiats Rate" url="/fiats"/>

```json title="Response"
{
  "data": [
    { "code": "ISK", "rate": 121.13998 },
    { "code": "CNY", "rate": 6.9669 },
    ...
  ]
}
```
