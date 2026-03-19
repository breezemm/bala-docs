---
title: MPU
sidebar_position: 2
---

import Card from '@site/src/components/Card';
import ApiResponseViewer from '@site/src/components/ApiResponseViewer';

Retrieve comprehensive metadata and operational status for a specific project within your workspace. This endpoint provides deep visibility into creation timelines, owner details, and environment configurations.

### Generate Method

<Card
method="POST"
endpoint="{api_endpoint}/merchant/pay/mpu/generate"
description="Required amount and currency_code"
/>

## Response Attributes

| Attribute | Type   | Details              |
| :-------- | :----- | :------------------- |
| **url**   | string | Payment redirect URL |
| **data**  | object | Payment data object  |

#### data object

| Attribute        | Type   | Details                                                                                             |
| :--------------- | :----- | :-------------------------------------------------------------------------------------------------- |
| **merchantID**   | string | Payment amount                                                                                      |
| **invoiceNo**    | string | Payment amount                                                                                      |
| **productDesc**  | string | Payment amount                                                                                      |
| **amount**       | string | Payment amount                                                                                      |
| **currencyCode** | string | Currency code (e.g. `MMK`, `USD`)                                                                   |
| **hashValue**    | string | MMQR-compliant QR payload string. Should be rendered as a QR code on the frontend for user scanning |

<ApiResponseViewer
mode="schema"
schema={{
    url: "htwwpogeoo",
    data: {
        merchantID: "123",
        invoiceNo: "123",
        productDesc: "123",
        amount: 1223,
        currencyCode: "123",
        hashValue:"13"
    },
  }}
/>



---

## Prebuild Method

<Card
method="POST"
endpoint="{api_endpoint}/merchant/pay/mpu/prebuilt"
description="demo description"
/>

## Response Attributes

| Arrtibute | Type | Detail |
| :-------- | :--- | :----- |
