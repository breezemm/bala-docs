---
title: MPU
sidebar_position: 2
---

import Card from '@site/src/components/Card';
import ApiResponseViewer from '@site/src/components/ApiResponseViewer';

Initiate and process transactions through the Myanmar Payment Union (MPU) network. These endpoints enable merchants to generate MPU payment requests, providing secure checkout URLs or prebuilt payment forms for seamless customer payments.

## COUNTRY CURRENCY CODES

| Country | Currency  | Code | Number |
| :------ | :-------- | :--- | :----- |
| Myanmar | Kyat      | MMK  | 104    |
| USD     | US Dollar | USD  | 840    |

## Generate Method

<Card
method="POST"
endpoint="{api_endpoint}/merchant/pay/mpu/generate"
description="Required amount and currency_code"
/>

### Generate Request Body

![MPU Generate Payment Image](/img/mpu-generate.png)

### Generate Response Attributes

| Attribute | Type   | Details              |
| :-------- | :----- | :------------------- |
| **url**   | string | Payment redirect URL |
| **form**  | object | Payment data object  |

#### form object

| Attribute        | Type   | Details                                                                                             |
| :--------------- | :----- | :-------------------------------------------------------------------------------------------------- |
| **merchantID**   | string | Merchant ID                                                                                         |
| **invoiceNo**    | string | Invoice number                                                                                      |
| **productDesc**  | string | Product description                                                                                 |
| **amount**       | string | Amount                                                                                              |
| **currencyCode** | string | Currency code in ISO 4217 format (e.g. `MMK`)                                                       |
| **hashValue**    | string | MMQR-compliant QR payload string. Should be rendered as a QR code on the frontend for user scanning |

<ApiResponseViewer
mode="schema"
schema={{
    "status": 1,
    "message": "success.",
    "data": {
        "url": "https://www.mpuecomuat.com/UAT/Payment/Payment/pay",
        "form": {
            "merchantID": "214104001711381",
            "invoiceNo": "TBM1-17742485004406",
            "productDesc": "#3 ahlu",
            "amount": "000000100000",
            "currencyCode": "104",
            "hashValue": "1AFBCC9C78BDB93C51C95727B895CF0BB3762FB8"
        }
    }
}}
/>

---

## Prebuild Method

<Card
method="POST"
endpoint="{api_endpoint}/merchant/pay/mpu/prebuilt"
description="Required amount and currency_code"
/>

### Prebuilt Request Body

![MPU Prebuilt Payment Image](/img/mpu-prebuilt.png)

### Prebuilt Response Attributes

| Arrtibute | Type   | Detail               |
| :-------- | :----- | :------------------- |
| reference | string | Reference number     |
| url       | string | Payment redirect URL |

<ApiResponseViewer
mode="schema"
schema={{
    "status": 1,
    "message": "success.",
    "data": {
        "reference": "TBM1-17742486277375",
        "url": "{{api_endpoint}}/prebuilt/pay/mpu?code=Gzg4S27mI11BP3..."
}
}}
/>
