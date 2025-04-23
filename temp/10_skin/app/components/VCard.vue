<template lang="pug">
.border.border-slate-200.p-2
  slot(name="header")
    p Card Header goes here
  .border.border-slate-200.p-2
    slot(name="default")
      p Content goes here
  slot(name="footer")
    p Card Footer goes here
</template>
