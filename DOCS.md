<a name="top"></a>
# HealthyBee Rest Api v0.1.0

Restful api for HealthyBee web application

 - [Auth](#Auth)
   - [Authenticate](#Authenticate)
   - [Authenticate with Facebook](#Authenticate-with-Facebook)
   - [Authenticate with Google](#Authenticate-with-Google)
 - [Feedbacks](#Feedbacks)
   - [Create feedbacks](#Create-feedbacks)
   - [Retrieve feedbacks](#Retrieve-feedbacks)
 - [PasswordReset](#PasswordReset)
   - [Send email](#Send-email)
   - [Submit password](#Submit-password)
   - [Verify token](#Verify-token)
 - [Subscription](#Subscription)
   - [Create subscription](#Create-subscription)
   - [Delete subscription](#Delete-subscription)
   - [Retrieve subscription](#Retrieve-subscription)
   - [Retrieve subscriptions](#Retrieve-subscriptions)
   - [Update subscription](#Update-subscription)
 - [User](#User)
   - [Create user](#Create-user)
   - [Delete user](#Delete-user)
   - [Retrieve current user](#Retrieve-current-user)
   - [Retrieve user](#Retrieve-user)
   - [Retrieve users](#Retrieve-users)
   - [Update password](#Update-password)
   - [Update user](#Update-user)

___


# <a name='Auth'></a> Auth

## <a name='Authenticate'></a> Authenticate
[Back to top](#top)

```
POST /auth
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization | `String` | <p>Basic authorization with email and password.</p> |

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>Master access_token.</p> |

### Success response

#### Success response - `Success 201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token | `String` | <p>User <code>access_token</code> to be passed to other requests.</p> |
| user | `Object` | <p>Current user's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 401 |  | <p>Master access only or invalid credentials.</p> |

## <a name='Authenticate-with-Facebook'></a> Authenticate with Facebook
[Back to top](#top)

```
POST /auth/facebook
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>Facebook user accessToken.</p> |

### Success response

#### Success response - `Success 201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token | `String` | <p>User <code>access_token</code> to be passed to other requests.</p> |
| user | `Object` | <p>Current user's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 401 |  | <p>Invalid credentials.</p> |

## <a name='Authenticate-with-Google'></a> Authenticate with Google
[Back to top](#top)

```
POST /auth/google
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>Google user accessToken.</p> |

### Success response

#### Success response - `Success 201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token | `String` | <p>User <code>access_token</code> to be passed to other requests.</p> |
| user | `Object` | <p>Current user's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 401 |  | <p>Invalid credentials.</p> |

# <a name='Feedbacks'></a> Feedbacks

## <a name='Create-feedbacks'></a> Create feedbacks
[Back to top](#top)

```
POST /feedbacks
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name |  | <p>Feedbacks's name.</p> |
| email |  | <p>Feedbacks's email.</p> |
| message |  | <p>Feedbacks's message.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| feedbacks | `Object` | <p>Feedbacks's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Feedbacks not found.</p> |

## <a name='Retrieve-feedbacks'></a> Retrieve feedbacks
[Back to top](#top)

```
GET /feedbacks
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>admin access token.</p> |
| q | `String` | **optional** <p>Query to search.</p> |
| page | `Number` | **optional** <p>Page number.</p>_Default value: 1_<br>_Size range: 1..30_<br> |
| limit | `Number` | **optional** <p>Amount of returned items.</p>_Default value: 30_<br>_Size range: 1..100_<br> |
| sort | `String[]` | **optional** <p>Order of returned items.</p>_Default value: -createdAt_<br> |
| fields | `String[]` | **optional** <p>Fields to be returned.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| feedbacks | `Object[]` | <p>List of feedbacks.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>admin access only.</p> |

# <a name='PasswordReset'></a> PasswordReset

## <a name='Send-email'></a> Send email
[Back to top](#top)

```
POST /password-resets
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>Email address to receive the password reset token.</p> |
| link | `String` | <p>Link to redirect user.</p> |

### Success response

#### Success response - `Success 202`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 202 |  | <p>Accepted.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |

## <a name='Submit-password'></a> Submit password
[Back to top](#top)

```
PUT /password-resets/:token
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| password | `String` | <p>User's new password.</p>_Size range: 6.._<br> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Token has expired or doesn't exist.</p> |

## <a name='Verify-token'></a> Verify token
[Back to top](#top)

```
GET /password-resets/:token
```

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| token | `String` | <p>Password reset token.</p> |
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 404 |  | <p>Token has expired or doesn't exist.</p> |

# <a name='Subscription'></a> Subscription

## <a name='Create-subscription'></a> Create subscription
[Back to top](#top)

```
POST /subscriptions
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>master access token.</p> |
| name |  | <p>Subscription's name.</p> |
| mobile |  | <p>Subscription's mobile.</p> |
| age |  | <p>Subscription's age.</p> |
| weight |  | <p>Subscription's weight.</p> |
| line0 |  | <p>Subscription's line0.</p> |
| line1 |  | <p>Subscription's line1.</p> |
| line2 |  | <p>Subscription's line2.</p> |
| fitness_goal |  | <p>Subscription's fitness_goal.</p> |
| diet_preference |  | <p>Subscription's diet_preference.</p> |
| meal_preference |  | <p>Subscription's meal_preference.</p> |
| meals |  | <p>Subscription's meals.</p> |
| meal_duration |  | <p>Subscription's meal_duration.</p> |
| start_date |  | <p>Subscription's start_date.</p> |
| gender |  | <p>Subscription's gender.</p> |
| pincode |  | <p>Subscription's pincode.</p> |
| physical_activity |  | <p>Subscription's physical_activity.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| subscription | `Object` | <p>Subscription's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Subscription not found.</p> |
| 401 |  | <p>master access only.</p> |

## <a name='Delete-subscription'></a> Delete subscription
[Back to top](#top)

```
DELETE /subscriptions/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>master access token.</p> |

### Success response

#### Success response - `Success 204`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 204 |  | <p>No Content.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 404 |  | <p>Subscription not found.</p> |
| 401 |  | <p>master access only.</p> |

## <a name='Retrieve-subscription'></a> Retrieve subscription
[Back to top](#top)

```
GET /subscriptions/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>master access token.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| subscription | `Object` | <p>Subscription's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Subscription not found.</p> |
| 401 |  | <p>master access only.</p> |

## <a name='Retrieve-subscriptions'></a> Retrieve subscriptions
[Back to top](#top)

```
GET /subscriptions
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>master access token.</p> |
| q | `String` | **optional** <p>Query to search.</p> |
| page | `Number` | **optional** <p>Page number.</p>_Default value: 1_<br>_Size range: 1..30_<br> |
| limit | `Number` | **optional** <p>Amount of returned items.</p>_Default value: 30_<br>_Size range: 1..100_<br> |
| sort | `String[]` | **optional** <p>Order of returned items.</p>_Default value: -createdAt_<br> |
| fields | `String[]` | **optional** <p>Fields to be returned.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| count | `Number` | <p>Total amount of subscriptions.</p> |
| rows | `Object[]` | <p>List of subscriptions.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>master access only.</p> |

## <a name='Update-subscription'></a> Update subscription
[Back to top](#top)

```
PUT /subscriptions/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>master access token.</p> |
| name |  | <p>Subscription's name.</p> |
| mobile |  | <p>Subscription's mobile.</p> |
| age |  | <p>Subscription's age.</p> |
| weight |  | <p>Subscription's weight.</p> |
| line0 |  | <p>Subscription's line0.</p> |
| line1 |  | <p>Subscription's line1.</p> |
| line2 |  | <p>Subscription's line2.</p> |
| fitness_goal |  | <p>Subscription's fitness_goal.</p> |
| diet_preference |  | <p>Subscription's diet_preference.</p> |
| meal_preference |  | <p>Subscription's meal_preference.</p> |
| meals |  | <p>Subscription's meals.</p> |
| meal_duration |  | <p>Subscription's meal_duration.</p> |
| start_date |  | <p>Subscription's start_date.</p> |
| gender |  | <p>Subscription's gender.</p> |
| pincode |  | <p>Subscription's pincode.</p> |
| physical_activity |  | <p>Subscription's physical_activity.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| subscription | `Object` | <p>Subscription's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 404 |  | <p>Subscription not found.</p> |
| 401 |  | <p>master access only.</p> |

# <a name='User'></a> User

## <a name='Create-user'></a> Create user
[Back to top](#top)

```
POST /users
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>Master access_token.</p> |
| email | `String` | <p>User's email.</p> |
| password | `String` | <p>User's password.</p>_Size range: 6.._<br> |
| name | `String` | **optional** <p>User's name.</p> |
| picture | `String` | **optional** <p>User's picture.</p> |
| role | `String` | **optional** <p>User's role.</p>_Default value: user_<br>_Allowed values: user,admin_ |

### Success response

#### Success response - `Sucess 201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>Master access only.</p> |
| 409 |  | <p>Email already registered.</p> |

## <a name='Delete-user'></a> Delete user
[Back to top](#top)

```
DELETE /users/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>User access_token.</p> |

### Success response

#### Success response - `Success 204`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 204 |  | <p>No Content.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 401 |  | <p>Admin access only.</p> |
| 404 |  | <p>User not found.</p> |

## <a name='Retrieve-current-user'></a> Retrieve current user
[Back to top](#top)

```
GET /users/me
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>User access_token.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

## <a name='Retrieve-user'></a> Retrieve user
[Back to top](#top)

```
GET /users/:id
```

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 404 |  | <p>User not found.</p> |

## <a name='Retrieve-users'></a> Retrieve users
[Back to top](#top)

```
GET /users
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>User access_token.</p> |
| q | `String` | **optional** <p>Query to search.</p> |
| page | `Number` | **optional** <p>Page number.</p>_Default value: 1_<br>_Size range: 1..30_<br> |
| limit | `Number` | **optional** <p>Amount of returned items.</p>_Default value: 30_<br>_Size range: 1..100_<br> |
| sort | `String[]` | **optional** <p>Order of returned items.</p>_Default value: -createdAt_<br> |
| fields | `String[]` | **optional** <p>Fields to be returned.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| users | `Object[]` | <p>List of users.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>Admin access only.</p> |

## <a name='Update-password'></a> Update password
[Back to top](#top)

```
PUT /users/:id/password
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization | `String` | <p>Basic authorization with email and password.</p> |

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| password | `String` | <p>User's new password.</p>_Size range: 6.._<br> |

### Success response

#### Success response - `Success 201`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>Current user access only.</p> |
| 404 |  | <p>User not found.</p> |

## <a name='Update-user'></a> Update user
[Back to top](#top)

```
PUT /users/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| access_token | `String` | <p>User access_token.</p> |
| name | `String` | **optional** <p>User's name.</p> |
| picture | `String` | **optional** <p>User's picture.</p> |

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| user | `Object` | <p>User's data.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| 400 | `Object` | <p>Some parameters may contain invalid values.</p> |
| 401 |  | <p>Current user or admin access only.</p> |
| 404 |  | <p>User not found.</p> |
