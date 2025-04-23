:53 {
    errors
    health {
       lameduck 5s
    }
    ready
    kubernetes cluster.local in-addr.arpa ip6.arpa {
       pods insecure
       fallthrough in-addr.arpa ip6.arpa
       ttl 30
    }
    prometheus :9153
    forward . /etc/resolv.conf {
       max_concurrent 1000
    }
    cache 30
    loop
    reload
    loadbalance
}
transfer (allow outgoing zone transfer)
autopath (optimize search path)
(ext) json query a json-DNS
(ext) finalize CNAME to IP
(ext) kubenodes
   req kubeapi plugin
(ext) k8s_gateway
auto serves RFC1035 master file
file serves RFC1035 master file
hosts serves /etc/hosts
dnssec signing
sign signing

*** k8s_external (for external IP zones)

whoami
secondary
tls



dig @ip-address -p 53 a whoami.example.org

139.162.82.18
10.2.0.5



139.162.82.73
10.2.0.132

sequence
- errors //enable error logging
- health //health check endpoint
- ready //readiness http endpoint
- *kubernetes //read zone data from cluster
- prometheus //pod metrics for prometheus
- *forward //proxying upstream resolvers
- cache //frontend cache
- loop //detect forwarding  loop
- reload //auto reload Corefile
- loadbalance //randomizes return order


cluster.local
in-addr.arpa
ip6.arpa {
    ttl 30
    pods insecure
    fallthrough
      in-addr.arpa
      ip6.arpa
}

endpoint URL
tls CERT KEY CACERT
endpoint https://k8s-endpoint:8443

dig @10.32.0.61 kubernetes.default.svc.cluster.local +noall +answer

kubectl -n kube-system get pods -o wide


plugin.cfg - recompile coredns

kubeapi
kubenodes example  in-addr.arpa ip6.arpa {
  example
  fallthrough in-addr.arpa ip6.arpa
}



k8s_external telematiq.org {
  apex = dns
  ttl = 5sec
  headless
  fallthrough (nextzone)
}

transfer example.org { to * }
kubernetes cluster.local ...
k8s_external example.org

kind: service
metadata:
  name: test
  namespace: default
spec:
  clusterIP: None
  externalIPs:
    - 192.168.200.123
  type: ClusterIP

A record for test.default.example.org

$ kubectl -n istio-system get svc


$ dig AXFR @10.239.96.10 example.com. | grep 'istio-system.*IN[[:space:]]A'

        k8s_external example.com {
           ttl 30
        }
        transfer example.com {
          to *
        }






-----
nuxt.com
go.nuxt.com/(social)
github.com/nuxt/(project)
hub.nuxt.com
nuxters.nuxt.com
nuxtlab.com
ui.nuxt.com
content.nuxt.com
certification.nuxt.com


/blog
/blog/(postname)
/deploy
/design-kit
/docs
/docs/(pagename)
/enterprise
/enterprise/agencies
/enterprise/sponsors
/enterprise/support
/modules
/modules/(modname)
/showcase
/team
/templates
/video-courses




-----
jq  '.items[].status.addresses | map(select(.type=="ExternalIP"))'

k get nodes  -o json

k get services -o json (-N default

jq '.items[].spec.clusterIP'

jq '.items[].metadata.labels."app.kubernetes.io/name"'

k get service -n ingress -o json -l "app.kubernetes.io/name=haproxy-ingress"

jq ".items[0].spec.ports" = { port, Nodeport, protocol..}
jq ".items[0].spec.type" = NodePort

k get pods -A -o wide  -l "app.kubernetes.io/name=haproxy-ingress"

NAMESPACE   NAME                                         READY   STATUS    RESTARTS   AGE   IP         NODE                         NOMINATED NODE   READINESS GATES
ingress     haproxy-ingress-1743154941-94cf66f7b-7xg88   1/1     Running   0          52m   10.2.1.8   lke8519-10669-5f28685764fb   <none>           <none>


jq -r ".items[0].spec.nodeName" => text name of the node


jq '.items[].metadata.labels."kubernetes.io/hostname"'

k get node -l "kubernetes.io/hostname=lke8519-10669-5f28685764fb" -o json |
jq '.items[].status.addresses'

[
  {
    "address": "lke8519-10669-5f28685764fb",
    "type": "Hostname"
  },
  {
    "address": "172.104.98.28",
    "type": "ExternalIP"
  },
  {
    "address": "2400:8902::f03c:95ff:fe09:65b7",
    "type": "ExternalIP"
  },
  {
    "address": "192.168.186.142",
    "type": "InternalIP"
  }
]
