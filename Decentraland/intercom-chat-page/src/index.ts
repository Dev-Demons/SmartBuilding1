const configuration: Record<string, string> = {
  api_base: "https://api-iam.intercom.io",
  app_id: "z0h94kay",
}

const params = new URL(location.href)
let user_id = params.searchParams.get('user_id')
if (user_id) {
  configuration.user_id = user_id
}

window.Intercom("boot", configuration);
window.Intercom("onHide", () => {
  if (window.opener) {
    window.close()
  }
})
window.Intercom("show");