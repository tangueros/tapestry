## step 1 - create a cloud-based kub cluster
 - linode lke
 - spot.rackspace

## step 2 - use kubeconfig to connect
  https://spot.rackspace.com/ui/cloudspaces/tangobackend/overview
  org = telematique

## step 3 - check base condition
  2 x nodes = general purpose large size HKG
    2 x 4 CPUs           ( 3 x 2 CPU )
    2 x 15G RAM          ( 3 x 2G RAM )
    2 x 40G local disk   ( 3 x 50G Disk )
    ? no external IP ?   ( 3 x external IP )

  helm releases:
    kubernetes dashboard
    metrics server
    tigera operator

  base pods:
    2ds = calico-node              (calico-node
    2ds = csi-cinder-nodeplugin    (csi-linode-node
    2ds = konnectivity-agent
    2ds = rxt-kube-proxy           (kube-proxy
    2ds = vcp-proxy
                                   (node-exporter
    2 = calico-apiserver
    1 = calico-kube-controller     (calico-kube-controller
    1 = calico-typha
    2 = coredns                    (coredns
    1 = kubernetes dashboard
    1 = metrics-server
    1 = tigera-operator

  namespaces:
    all = (35)                  (all = 19
    kube-system (14 = 9ds + 5)  (kube-system 11 = 8ds + 3
                                (calico-apiserver 2
                                (calico-system 4 = 2ds + 2
    kube-public (0)             (kube-public 0
    kube-node-lease (0)         (kube-node-lease 0
    lens-metrics (5)
    monitoring (0)
    default (4)                 (default 0
                                (kubernetes-dashboard 1
                                (projectsveltos 0
                                (tigera-operator 1
    argocd (7)
    certmanager (3)
    ingress (1)                 (ingress
    local-storage (1)           (local-storage


  extra helm:
    hello-world in default
    argocd in argocd

    local-path-provisioner in local-storage
    cert-manager in certmanager
    haproxy-ingress in ingress
    whoami in default
    dokuwiki in default
    ingress-nginx in default


## step 4 : install my essentials

  haproxy-ingress in NS ingress
    controller.service.type = NodePort
    (ok) controller.ingressClass: haproxy
    controller.ingressClassResource.enabled: true
    controller.ingressClassResource.default: true or false
    controller.ingressClassResource.controllerClass: haproxy
    ? service.spec.externalTrafficPolicy to local
    ??controller.kubernetesGateway.enabled to true.


  local-path-provisioners in NS local-storage
    storageClass.defaultClass: true
    (ok) storageClass.name: local-path
    (ok) storageClass.reclaimPolicy: Delete or Retain


  whoami in NS default
    ingress.ingressClassName: haproxy
    ingress.enabled: true
    (ok) ingress.hosts[].host: whoami.local


  dokuwiki in NS default
    global.storageClass: local-path
    (ok) dokuwikiUsername: user
    (ok) dokuwikiPassword:
    (ok) persistence.enabled: true
    persistence.storageClass: local-path
    (ok) persistence.size: 8Gi
    service.type: ClusterIP


  ArgoCD
  Prometheus
  Certmanager
