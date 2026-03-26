---
title: Status Codes
sidebar_position: 4
---

import ApiResponseViewer from '@site/src/components/ApiResponseViewer';

# Status Codes

The API returns specific status codes in the response body to indicate the result of the request. These codes help you programmatically determine if a request was successful or if an error occurred.

Below is the list of status codes and their meanings:

| status Code | Description                                                                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `1`         | **Success** - Response with data. The request was successful and the payload contains the requested data.                                               |
| `-1000`     | **Bad Request** - Invalid or required field missing. Check your request parameters and ensure all required fields are provided and correctly formatted. Specific failure reasons, including field names and constraint violations, are provided within the **errors** object in the response body.|
| `-1001`     | **Unauthorized or invalid token** - You are not authorized or token is invalid to perform this request. Check your authentication credentials.          |
| `-1004`     | **Service Unavailable** - The service is currently unavailable due to an issue with the banking service provider. Please try again later.               |

:::info Important Note on `-1004` Errors
This error specifically means that the **underlying service providers or banking services** failed to process the request or are unavailable. It does **not** indicate an operational failure or downtime with our payment gateway itself.
:::
<ApiResponseViewer
title="Status code 1"
mode="response"
data={{
    reference: "TBM1-******",
    qrString: "ibieoiojijhgieoa....",
  }}
/>

<br/>
<ApiResponseViewer
title="Status code -1000"
mode="schema"
schema={{
    "status": -1000,
    "message": "Data field required or invalid.",
    "errors": {
        "amount": [
            "The amount field is required."
        ]
    }
}}
/>

<br />

<ApiResponseViewer
title="Status code -1001"
mode="schema"
schema={{
    "status": -1001,
    "message": "Unauthorized or invalid token."
}}
/>

<br />

<ApiResponseViewer
title="Status code -1004"
mode="schema"
schema={{
    "status": -1004,
    "message": "Payment gateway is currently unavailable."
}}
/>
