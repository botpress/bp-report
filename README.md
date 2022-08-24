# Botpress Issue Reporter

This is a custom module that allows you to quickly and easily share issues with your conversations in botpress with your team or with the botpress team. 

Note: issues are public, so make sure to only use this while in development.

## Example 
![Botpress Custom Module Template](readme-banner.png)

You can report anything, bugs or incorrect wordings, and you'll get a shareable link for your work.

## Setting it up
1. Download [bp-report.tgz](./custom_module/bp-report.tgz)
2. In Botpress go to the modules configuration page
3. Click upload module
4. select the download tgz file
5. submit.
6. restart the server
7. unpack the module
8. activate the module by toggling it on
9. restart botpress

### (optional) add slack notification
1. create a webhook on slack [slack webhook docs](https://api.slack.com/messaging/webhooks)
2. open the code editor
3. open modules/bp-report.json
4. paste the webhook url as a value for someEndpoint
5. restart botpress

## to use it
1. in any conversation type "bp_report" to report an issue to us,
2. type in a description of the issue
3. You'll get a link to the conversation information and optionally a notification in slack.


