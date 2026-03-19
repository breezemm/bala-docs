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

<div className="hero-section">
  <div className="hero-text">

## Response Attributes

| Attribute | Type   | Details              |
| :-------- | :----- | :------------------- |
| **url**   | string | Payment redirect URL |
| **data**  | object | Payment data object  |

#### data object

| Attribute        | Type   | Details                           |
| :--------------- | :----- | :-------------------------------- |
| **merchantID**   | string | Payment amount                    |
| **invoiceNo**    | string | Payment amount                    |
| **productDesc**  | string | Payment amount                    |
| **amount**       | string | Payment amount                    |
| **currencyCode** | string | Currency code (e.g. `MMK`, `USD`) |
| **hashValue**    | string | Currency code (e.g. `MMK`, `USD`) |

</div>

  <div className="hero-image">
   <ApiResponseViewer
data={{
    reference: "550e8400-e29b-41d4-a716-446655440000",
    qrString: "000201010212..."
  }}
/>
  </div>
</div>

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
