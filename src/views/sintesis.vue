<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En la segmentación de mercados y clientes, se deben tener las estrategias claras para definir el segmento al cual se esté apuntando, esto de acuerdo con las variables y criterios necesarios para alcanzar el posicionamiento en el mercado y para lograr ser competentes y versátiles; por esto, es muy importante el conocimiento de los clientes, con el fin de poder clasificarlos y prospectarlos, entendiendo las necesidades y el sector al cual pertenecen, logrando así el crecimiento y desarrollo de la empresa.

    p.mb-5 A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
