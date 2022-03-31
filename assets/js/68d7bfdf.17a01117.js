"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12691],{79636:function(e){e.exports=JSON.parse('{"pluginId":"docs-apisix","version":"2.5","label":"2.5","banner":"unmaintained","badge":true,"className":"docs-version-2.5","isLast":false,"docsSidebars":{"version-2.5/docs":[{"type":"link","label":"Apache APISIX","href":"https://apisix.apache.org/docs/apisix/getting-started"},{"type":"category","label":"Architecture Design","items":[{"type":"link","label":"APISIX","href":"/docs/apisix/2.5/architecture-design/apisix"},{"type":"link","label":"Route","href":"/docs/apisix/2.5/architecture-design/route"},{"type":"link","label":"Plugin","href":"/docs/apisix/2.5/architecture-design/plugin"},{"type":"link","label":"Script","href":"/docs/apisix/2.5/architecture-design/script"},{"type":"link","label":"Service","href":"/docs/apisix/2.5/architecture-design/service"},{"type":"link","label":"Consumer","href":"/docs/apisix/2.5/architecture-design/consumer"},{"type":"link","label":"Upstream","href":"/docs/apisix/2.5/architecture-design/upstream"},{"type":"link","label":"Global rule","href":"/docs/apisix/2.5/architecture-design/global-rule"},{"type":"link","label":"Plugin Config","href":"/docs/apisix/2.5/architecture-design/plugin-config"},{"type":"link","label":"Router","href":"/docs/apisix/2.5/architecture-design/router"},{"type":"link","label":"Debug Mode","href":"/docs/apisix/2.5/architecture-design/debug-mode"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Getting Started","href":"/docs/apisix/2.5/getting-started"},{"type":"link","label":"How to build Apache APISIX","href":"/docs/apisix/2.5/how-to-build"},{"type":"category","label":"Plugins","items":[{"type":"category","label":"General","items":[{"type":"link","label":"batch-requests","href":"/docs/apisix/2.5/plugins/batch-requests"},{"type":"link","label":"serverless","href":"/docs/apisix/2.5/plugins/serverless"},{"type":"link","label":"redirect","href":"/docs/apisix/2.5/plugins/redirect"},{"type":"link","label":"echo","href":"/docs/apisix/2.5/plugins/echo"},{"type":"link","label":"server-info","href":"/docs/apisix/2.5/plugins/server-info"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Transformation","items":[{"type":"link","label":"response-rewrite","href":"/docs/apisix/2.5/plugins/response-rewrite"},{"type":"link","label":"proxy-rewrite","href":"/docs/apisix/2.5/plugins/proxy-rewrite"},{"type":"link","label":"grpc-transcode","href":"/docs/apisix/2.5/plugins/grpc-transcode"},{"type":"link","label":"fault-injection","href":"/docs/apisix/2.5/plugins/fault-injection"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Authentication","items":[{"type":"link","label":"key-auth","href":"/docs/apisix/2.5/plugins/key-auth"},{"type":"link","label":"jwt-auth","href":"/docs/apisix/2.5/plugins/jwt-auth"},{"type":"link","label":"basic-auth","href":"/docs/apisix/2.5/plugins/basic-auth"},{"type":"link","label":"authz-keycloak","href":"/docs/apisix/2.5/plugins/authz-keycloak"},{"type":"link","label":"wolf-rbac","href":"/docs/apisix/2.5/plugins/wolf-rbac"},{"type":"link","label":"openid-connect","href":"/docs/apisix/2.5/plugins/openid-connect"},{"type":"link","label":"hmac-auth","href":"/docs/apisix/2.5/plugins/hmac-auth"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Security","items":[{"type":"link","label":"cors","href":"/docs/apisix/2.5/plugins/cors"},{"type":"link","label":"uri-blocker","href":"/docs/apisix/2.5/plugins/uri-blocker"},{"type":"link","label":"ip-restriction","href":"/docs/apisix/2.5/plugins/ip-restriction"},{"type":"link","label":"referer-restriction","href":"/docs/apisix/2.5/plugins/referer-restriction"},{"type":"link","label":"consumer-restriction","href":"/docs/apisix/2.5/plugins/consumer-restriction"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Traffic","items":[{"type":"link","label":"limit-req","href":"/docs/apisix/2.5/plugins/limit-req"},{"type":"link","label":"limit-conn","href":"/docs/apisix/2.5/plugins/limit-conn"},{"type":"link","label":"limit-count","href":"/docs/apisix/2.5/plugins/limit-count"},{"type":"link","label":"proxy-cache","href":"/docs/apisix/2.5/plugins/proxy-cache"},{"type":"link","label":"request-validation","href":"/docs/apisix/2.5/plugins/request-validation"},{"type":"link","label":"proxy-mirror","href":"/docs/apisix/2.5/plugins/proxy-mirror"},{"type":"link","label":"api-breaker","href":"/docs/apisix/2.5/plugins/api-breaker"},{"type":"link","label":"traffic-split","href":"/docs/apisix/2.5/plugins/traffic-split"},{"type":"link","label":"request-id","href":"/docs/apisix/2.5/plugins/request-id"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Monitoring","items":[{"type":"link","label":"prometheus","href":"/docs/apisix/2.5/plugins/prometheus"},{"type":"link","label":"Zipkin","href":"/docs/apisix/2.5/plugins/zipkin"},{"type":"link","label":"skywalking","href":"/docs/apisix/2.5/plugins/skywalking"},{"type":"link","label":"node-status","href":"/docs/apisix/2.5/plugins/node-status"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Loggers","items":[{"type":"link","label":"http-logger","href":"/docs/apisix/2.5/plugins/http-logger"},{"type":"link","label":"tcp-logger","href":"/docs/apisix/2.5/plugins/tcp-logger"},{"type":"link","label":"kafka-logger","href":"/docs/apisix/2.5/plugins/kafka-logger"},{"type":"link","label":"udp-logger","href":"/docs/apisix/2.5/plugins/udp-logger"},{"type":"link","label":"syslog","href":"/docs/apisix/2.5/plugins/syslog"},{"type":"link","label":"log-rotate","href":"/docs/apisix/2.5/plugins/log-rotate"},{"type":"link","label":"error-log-logger","href":"/docs/apisix/2.5/plugins/error-log-logger"},{"type":"link","label":"sls-logger","href":"/docs/apisix/2.5/plugins/sls-logger"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Other Protocols","items":[{"type":"link","label":"dubbo-proxy","href":"/docs/apisix/2.5/plugins/dubbo-proxy"},{"type":"link","label":"mqtt-proxy","href":"/docs/apisix/2.5/plugins/mqtt-proxy"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"API","items":[{"type":"link","label":"Admin API","href":"/docs/apisix/2.5/admin-api"},{"type":"link","label":"Control API","href":"/docs/apisix/2.5/control-api"}],"collapsible":true,"collapsed":true},{"type":"link","label":"FAQ","href":"/docs/apisix/2.5/FAQ"},{"type":"category","label":"Others","items":[{"type":"category","label":"Discovery","items":[{"type":"link","label":"Integration service discovery registry","href":"/docs/apisix/2.5/discovery"},{"type":"link","label":"DNS","href":"/docs/apisix/2.5/discovery/dns"},{"type":"link","label":"consul_kv","href":"/docs/apisix/2.5/discovery/consul_kv"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Health Check","href":"/docs/apisix/2.5/health-check"},{"type":"link","label":"Router radixtree","href":"/docs/apisix/2.5/router-radixtree"},{"type":"link","label":"Stand-alone mode","href":"/docs/apisix/2.5/stand-alone"},{"type":"link","label":"Stream Proxy","href":"/docs/apisix/2.5/stream-proxy"},{"type":"link","label":"gRPC Proxy","href":"/docs/apisix/2.5/grpc-proxy"},{"type":"link","label":"Customize Nginx configuration","href":"/docs/apisix/2.5/customize-nginx-configuration"},{"type":"link","label":"HTTPS","href":"/docs/apisix/2.5/https"},{"type":"link","label":"Benchmark","href":"/docs/apisix/2.5/benchmark"},{"type":"link","label":"CODE_STYLE","href":"https://github.com/apache/apisix/blob/master/CODE_STYLE.md"},{"type":"link","label":"Debug Function","href":"/docs/apisix/2.5/debug-function"}],"collapsible":true,"collapsed":true},{"type":"link","label":"CHANGELOG","href":"https://github.com/apache/apisix/blob/master/CHANGELOG.md"}]}}')}}]);