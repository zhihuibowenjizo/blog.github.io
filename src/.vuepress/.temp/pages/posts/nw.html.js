export const data = JSON.parse("{\"key\":\"v-64ddefca\",\"path\":\"/posts/nw.html\",\"title\":\"网络设备\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-12-09T00:00:00.000Z\",\"category\":[\"网络设备\"],\"tag\":[\"网关\",\"网桥\",\"交换机\"]},\"headers\":[{\"level\":2,\"title\":\"网关\",\"slug\":\"网关\",\"link\":\"#网关\",\"children\":[]},{\"level\":2,\"title\":\"网桥、交换机\",\"slug\":\"网桥、交换机\",\"link\":\"#网桥、交换机\",\"children\":[]},{\"level\":2,\"title\":\"网桥不能连接不同网段\",\"slug\":\"网桥不能连接不同网段\",\"link\":\"#网桥不能连接不同网段\",\"children\":[]}],\"readingTime\":{\"minutes\":2,\"words\":599},\"localizedDate\":\"2022年12月9日\",\"filePathRelative\":\"posts/nw.md\",\"excerpt\":\"<h1> 网络设备</h1>\\n<h2> 网关</h2>\\n<p>网关是一个大概念，不具体特指一类产品，只要连接两个不同的网络的设备都可以叫网关；而‘路由器’么一般特指能够实现路由寻找和转发的特定类产品，路由器很显然能够实现网关的功能。换句话说，路由器可以实现网关的功能，但是路由器功能不仅仅是实现网关；网关可以由路由器实现，但是也不仅仅是由路由器实现。与网桥只是简单地传达信息不同，当信息到达网关以后，网关要对信息重新进行加工，以适应目的系统的需求。</p>\\n<h2> 网桥、交换机</h2>\\n<p>网桥又称桥接器，英文名Network Bridge，数据链路层设备。网桥却能看懂一些帧的信息。在以太网构造的局域网上，最终的寻址是以数据链路层的MAC地址作为标识的(就是用MAC地址可以在局域网上找到一台唯一的机器)，网桥能从发来的数据包中提取MAC信息，并且根据MAC信息对数据包进行有目的的转发，而不采用广播的方式，这样就能减少广播风暴的出现，提升整个网络的效率。但是它一般只有<strong>两个输入\\\\出口</strong>，要配合集线器使用，减少集线器(HUB)广播的数量来减少网络风暴的。后来随着硬件发展，出现了好多端口的链路层设备，这就是交换机，<strong>个人认为网桥已经被交换机替代了。</strong>(无线网桥除外)</p>\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
