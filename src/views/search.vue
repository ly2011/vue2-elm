<template>
  <div>
    <h2 class="title">Search Pages</h2>
  </div>
</template>
<script>
function sleep (delay, value) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delay, value)
  })
}
export default {
  data() {
    return {}
  },
  mounted() {
    this.getAge()
  },
  methods: {
    async getAge() {
      console.log('Hello')
      const result = await sleep(2000, 'It\'s me.')
      console.log(`res: ${result}`)
      console.log('World')
    }
  }
}
</script>
