import { sleep, group } from 'k6'
import http from 'k6/http'
import { SharedArray } from 'k6/data'

const data = new SharedArray('some data name', function () {
  return JSON.parse(open('./data.json')).users;
});

export default function () { 
  console.log(data[0])
  console.log(user.username);
  console.log(user.password);
}
const user = data[0];
console.log(data[0])
  console.log(user.username);
  console.log(user.password);

export const options = {

  thresholds: {},
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [{ target: 1, duration: '60s' }],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let match, response

  const vars = {}

  group('Launch - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', function () {
    response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    match = new RegExp('token="&quot;(.+?)&').exec(response.body)

    vars['C_Token'] = match ? match[1] || match[0] : null

    sleep(6.1)

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          accept: 'application/json',
          'if-none-match': '"lJyzdvp9dVw7AABygfsIuOb9dNUb5bV3iXeF0n5J6+s="',
          contenttype: 'application/json',
          'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(5)
  })

  group(
    'Login - https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
    function () {
      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
        {
          _token: `${vars['C_Token']}`,
          username: '{user.user',
          password: 'admin123',
        },
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            origin: 'https://opensource-demo.orangehrmlive.com',
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(1.3)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"lJyzdvp9dVw7AABygfsIuOb9dNUb5bV3iXeF0n5J6+s="',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(0.5)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=5.5&currentDate=2023-01-30&currentTime=10:55',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2023-01-30',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/events/push',
        null,
        {
          headers: {
            accept: 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(4.8)
    }
  )

  group(
    'ClickOn_Admin - https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(0.9)
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"lJyzdvp9dVw7AABygfsIuOb9dNUb5bV3iXeF0n5J6+s="',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(0.5)
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(1.8)
    }
  )

  group(
    'Create_NewAdmin - https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(0.5)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"lJyzdvp9dVw7AABygfsIuOb9dNUb5bV3iXeF0n5J6+s="',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(0.5)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(3.2)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=Admin',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(3.7)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?nameOrId=a',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(7.4)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=Admin%40',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(1.7)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=Admin%40a',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(3.8)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=Admin%40ab',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(1.3)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=Admin%40abcd',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(15.7)

      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/validation/user-name?userName=Admin%40abcd',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      response = http.post(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
        '{"username":"Admin@abcd","password":"Admin@abcd1","status":true,"userRoleId":1,"empNumber":"2"}',
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )

      match = new RegExp('"id":(.*?),').exec(response.body)

      vars['C_ID'] = match ? match[1] || match[0] : null

      sleep(3.2)
      console.log(response)
    }
  )

  group(
    'ClickOnAdmin - https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(0.5)
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"lJyzdvp9dVw7AABygfsIuOb9dNUb5bV3iXeF0n5J6+s="',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(6.9)
    }
  )

  group(
    'ClickOn_Admin - https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule',
    function () {
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(1)
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"lJyzdvp9dVw7AABygfsIuOb9dNUb5bV3iXeF0n5J6+s="',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(0.5)
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
        {
          headers: {
            'if-none-match': '"P2cce+UXjeBpq9iWKfHdQlYTyOgflCghtVN0ewu0gZM="',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(5.6)
      // Delete_UserAdmin
      response = http.del(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
        '{"ids": ${vars[\'C_ID\']}}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(2.9)
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC',
        {
          headers: {
            accept: 'application/json',
            'cache-control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
      sleep(4.8)
    }
  )

  group(
    'Logout - https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout',
    function () {
      response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout', {
        headers: {
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      })
      sleep(0.8)
      response = http.get(
        'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
        {
          headers: {
            accept: 'application/json',
            'if-none-match': '"lJyzdvp9dVw7AABygfsIuOb9dNUb5bV3iXeF0n5J6+s="',
            contenttype: 'application/json',
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
          },
        }
      )
    }
  )
}
