import { getUserEmail } from '../../utils/getUserEmail'

describe('getUserEmail', () => {
  it('Gets the user email from API gateway event', () => {
    /**
    * The following jwt have this payload:
    * {
    *   "email": "g4-capstone@pinflag.cl",
    *   "iss": "https://dev-nh2svhzc.us.auth0.com/",
    *   "sub": "PIekrRjxXNJim7QblTwZcwWSM92Q5j8p@clients",
    *   "aud": "https://9shjd4c13a.execute-api.sa-east-1.amazonaws.com/dev",
    *   "iat": 1664640904,
    *   "exp": 1664727304,
    *   "azp": "PIekrRjxXNJim7QblTwZcwWSM92Q5j8p",
    *   "gty": "client-credentials"
    * }
    */
    const event = {
      body: null,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imc0LWNhcHN0b25lQHBpbmZsYWcuY2wiLCJpc3MiOiJodHRwczovL2Rldi1uaDJzdmh6Yy51cy5hdXRoMC5jb20vIiwic3ViIjoiUElla3JSanhYTkppbTdRYmxUd1pjd1dTTTkyUTVqOHBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vOXNoamQ0YzEzYS5leGVjdXRlLWFwaS5zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYiLCJpYXQiOjE2NjQ2NDA5MDQsImV4cCI6MTY2NDcyNzMwNCwiYXpwIjoiUElla3JSanhYTkppbTdRYmxUd1pjd1dTTTkyUTVqOHAiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.qm7QQPEYNPy0ZyxtPgadm65PJwkBhf3A_L8Dp6dKm7o',
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Cache-Control': 'no-cache',
        'Postman-Token': 'c3ec1ad0-ca61-401a-bc4a-231b7acfe3c4',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive'
      },
      httpMethod: 'GET',
      isBase64Encoded: false,
      multiValueHeaders: {
        Authorization: [
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imc0LWNhcHN0b25lQHBpbmZsYWcuY2wiLCJpc3MiOiJodHRwczovL2Rldi1uaDJzdmh6Yy51cy5hdXRoMC5jb20vIiwic3ViIjoiUElla3JSanhYTkppbTdRYmxUd1pjd1dTTTkyUTVqOHBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vOXNoamQ0YzEzYS5leGVjdXRlLWFwaS5zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYiLCJpYXQiOjE2NjQ2NDA5MDQsImV4cCI6MTY2NDcyNzMwNCwiYXpwIjoiUElla3JSanhYTkppbTdRYmxUd1pjd1dTTTkyUTVqOHAiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.qm7QQPEYNPy0ZyxtPgadm65PJwkBhf3A_L8Dp6dKm7o'
        ],
        'User-Agent': ['PostmanRuntime/7.29.2'],
        Accept: ['*/*'],
        'Cache-Control': ['no-cache'],
        'Postman-Token': ['c3ec1ad0-ca61-401a-bc4a-231b7acfe3c4'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive']
      },
      multiValueQueryStringParameters: null,
      path: '/tickets',
      pathParameters: null,
      queryStringParameters: null,
      requestContext: {
        accountId: 'offlineContext_accountId',
        apiId: 'offlineContext_apiId',
        authorizer: {
          claims: [Object],
          principalId: 'offlineContext_authorizer_principalId',
          scopes: undefined
        },
        domainName: 'offlineContext_domainName',
        domainPrefix: 'offlineContext_domainPrefix',
        extendedRequestId: 'd888b55c-d67d-4e10-b799-f7e6177a2300',
        httpMethod: 'GET',
        identity: {
          accessKey: null,
          accountId: 'offlineContext_accountId',
          apiKey: 'offlineContext_apiKey',
          apiKeyId: 'offlineContext_apiKeyId',
          caller: 'offlineContext_caller',
          cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
          cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
          cognitoIdentityId: 'offlineContext_cognitoIdentityId',
          cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
          principalOrgId: null,
          sourceIp: '127.0.0.1',
          user: 'offlineContext_user',
          userAgent: 'PostmanRuntime/7.29.2',
          userArn: 'offlineContext_userArn'
        },
        operationName: undefined,
        path: '/tickets',
        protocol: 'HTTP/1.1',
        requestId: '58faece6-a4fe-4fe3-a8a2-c5eb6e95b550',
        requestTime: '01/Oct/2022:13:17:37 -0300',
        requestTimeEpoch: 1664641057188,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/tickets',
        stage: 'dev'
      },
      resource: '/tickets',
      stageVariables: null
    }
    expect(getUserEmail(event)).toBe('g4-capstone@pinflag.cl')
  })

  it('Throws error if there is no token in the event', () => {
    const event = {
      body: null,
      headers: {
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Cache-Control': 'no-cache',
        'Postman-Token': 'acd2161d-aecb-4a6a-a57e-150292111cb4',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive'
      },
      httpMethod: 'GET',
      isBase64Encoded: false,
      multiValueHeaders: {
        'User-Agent': ['PostmanRuntime/7.29.2'],
        Accept: ['*/*'],
        'Cache-Control': ['no-cache'],
        'Postman-Token': ['acd2161d-aecb-4a6a-a57e-150292111cb4'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive']
      },
      multiValueQueryStringParameters: null,
      path: '/tickets',
      pathParameters: null,
      queryStringParameters: null,
      requestContext: {
        accountId: 'offlineContext_accountId',
        apiId: 'offlineContext_apiId',
        authorizer: {
          claims: undefined,
          principalId: 'offlineContext_authorizer_principalId',
          scopes: undefined
        },
        domainName: 'offlineContext_domainName',
        domainPrefix: 'offlineContext_domainPrefix',
        extendedRequestId: '6643b2b3-45ec-424b-90ba-4127155dcf6d',
        httpMethod: 'GET',
        identity: {
          accessKey: null,
          accountId: 'offlineContext_accountId',
          apiKey: 'offlineContext_apiKey',
          apiKeyId: 'offlineContext_apiKeyId',
          caller: 'offlineContext_caller',
          cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
          cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
          cognitoIdentityId: 'offlineContext_cognitoIdentityId',
          cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
          principalOrgId: null,
          sourceIp: '127.0.0.1',
          user: 'offlineContext_user',
          userAgent: 'PostmanRuntime/7.29.2',
          userArn: 'offlineContext_userArn'
        },
        operationName: undefined,
        path: '/tickets',
        protocol: 'HTTP/1.1',
        requestId: 'e614c11d-d87d-4e6a-89c2-c496a499a577',
        requestTime: '01/Oct/2022:13:26:59 -0300',
        requestTimeEpoch: 1664641619250,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/tickets',
        stage: 'dev'
      },
      resource: '/tickets',
      stageVariables: null
    }
    expect(() => getUserEmail(event)).toThrow()
  })

  it('Throws error if there is no email in the jwt', () => {
    /**
    * The following jwt have this payload:
    * {
    *   "iss": "https://dev-nh2svhzc.us.auth0.com/",
    *   "sub": "PIekrRjxXNJim7QblTwZcwWSM92Q5j8p@clients",
    *   "aud": "https://9shjd4c13a.execute-api.sa-east-1.amazonaws.com/dev",
    *   "iat": 1664640904,
    *   "exp": 1664727304,
    *   "azp": "PIekrRjxXNJim7QblTwZcwWSM92Q5j8p",
    *   "gty": "client-credentials"
    * }
    */
    const event = {
      body: null,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Rldi1uaDJzdmh6Yy51cy5hdXRoMC5jb20vIiwic3ViIjoiUElla3JSanhYTkppbTdRYmxUd1pjd1dTTTkyUTVqOHBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vOXNoamQ0YzEzYS5leGVjdXRlLWFwaS5zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYiLCJpYXQiOjE2NjQ2NDA5MDQsImV4cCI6MTY2NDcyNzMwNCwiYXpwIjoiUElla3JSanhYTkppbTdRYmxUd1pjd1dTTTkyUTVqOHAiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.Q7UA4kP36dy2V3cYRYV5FhfiW4lZuxT8BE1yiRPL3tk',
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Cache-Control': 'no-cache',
        'Postman-Token': '6a5ed950-6f23-46fb-a6a7-6df091828c7c',
        Host: 'localhost:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive'
      },
      httpMethod: 'GET',
      isBase64Encoded: false,
      multiValueHeaders: {
        Authorization: [
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Rldi1uaDJzdmh6Yy51cy5hdXRoMC5jb20vIiwic3ViIjoiUElla3JSanhYTkppbTdRYmxUd1pjd1dTTTkyUTVqOHBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vOXNoamQ0YzEzYS5leGVjdXRlLWFwaS5zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYiLCJpYXQiOjE2NjQ2NDA5MDQsImV4cCI6MTY2NDcyNzMwNCwiYXpwIjoiUElla3JSanhYTkppbTdRYmxUd1pjd1dTTTkyUTVqOHAiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.Q7UA4kP36dy2V3cYRYV5FhfiW4lZuxT8BE1yiRPL3tk'
        ],
        'User-Agent': ['PostmanRuntime/7.29.2'],
        Accept: ['*/*'],
        'Cache-Control': ['no-cache'],
        'Postman-Token': ['6a5ed950-6f23-46fb-a6a7-6df091828c7c'],
        Host: ['localhost:3000'],
        'Accept-Encoding': ['gzip, deflate, br'],
        Connection: ['keep-alive']
      },
      multiValueQueryStringParameters: null,
      path: '/tickets',
      pathParameters: null,
      queryStringParameters: null,
      requestContext: {
        accountId: 'offlineContext_accountId',
        apiId: 'offlineContext_apiId',
        authorizer: {
          claims: [Object],
          principalId: 'offlineContext_authorizer_principalId',
          scopes: undefined
        },
        domainName: 'offlineContext_domainName',
        domainPrefix: 'offlineContext_domainPrefix',
        extendedRequestId: '38068044-0630-4397-ae44-d1d3c4b46a14',
        httpMethod: 'GET',
        identity: {
          accessKey: null,
          accountId: 'offlineContext_accountId',
          apiKey: 'offlineContext_apiKey',
          apiKeyId: 'offlineContext_apiKeyId',
          caller: 'offlineContext_caller',
          cognitoAuthenticationProvider: 'offlineContext_cognitoAuthenticationProvider',
          cognitoAuthenticationType: 'offlineContext_cognitoAuthenticationType',
          cognitoIdentityId: 'offlineContext_cognitoIdentityId',
          cognitoIdentityPoolId: 'offlineContext_cognitoIdentityPoolId',
          principalOrgId: null,
          sourceIp: '127.0.0.1',
          user: 'offlineContext_user',
          userAgent: 'PostmanRuntime/7.29.2',
          userArn: 'offlineContext_userArn'
        },
        operationName: undefined,
        path: '/tickets',
        protocol: 'HTTP/1.1',
        requestId: '9ca53363-5f69-4b41-97bb-3953f346011d',
        requestTime: '01/Oct/2022:13:33:45 -0300',
        requestTimeEpoch: 1664642025924,
        resourceId: 'offlineContext_resourceId',
        resourcePath: '/dev/tickets',
        stage: 'dev'
      },
      resource: '/tickets',
      stageVariables: null
    }
    expect(() => getUserEmail(event)).toThrow()
  })
})
