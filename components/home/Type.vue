<template>
  <section :class="`brand__area ${el_style ? 'pt-30' : ''} bg-grey`">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 mb-20">
          <h3>{{ $t("TypeService") }}</h3>
        </div>
      </div>
      <div class="row">
        <div v-for="(it, idx) in types" :key="idx" class="col-md-6">
          <nuxt-link :to="`/shop/${id}`">
            <img :src="it.project_file" class="w-10" alt="" />
            <span class="ms-3">{{ it.name }}</span>
          </nuxt-link>
          <hr style="border-top: dotted 1px" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  el_style: {
    type: Boolean,
    default: true,
  },
});

const types = ref([
  {
    id: 1,
    name: "การฝึกอบรม สัมนา อภิปราย และบรรยาย",
    project_file: "images/icon/icon_1.jpg",
    url: "/sample-submission",
  },
  {
    id: 2,
    name: "การฝึกอบรม สัมนา อภิปราย และบรรยาย",
    project_file: "images/icon/icon_1.jpg",
    url: "/sample-submission",
  },
  {
    id: 3,
    name: "การฝึกอบรม สัมนา อภิปราย และบรรยาย",
    project_file: "images/icon/icon_2.jpg",
    url: "/sample-submission",
  },
  {
    id: 4,
    name: "การฝึกอบรม สัมนา อภิปราย และบรรยาย",
    project_file: "images/icon/icon_3.jpg",
    url: "/sample-submission",
  },
  {
    id: 5,
    name: "การฝึกอบรม สัมนา อภิปราย และบรรยาย",
    project_file: "images/icon/icon_4.jpg",
    url: "/sample-submission",
  },
]);

const { data: resTypes } = await useAsyncData("newsType", async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/news-type`, {
    params: {
      is_publish: 1,
      lang: useCookie("lang").value,
      orderBy: "created_at",
    },
  });

  let d = data.data.map((e) => {
    e.category = "news-" + e.name;
    return e;
  });

  d.unshift({
    id: null,
    name: data.lang == "th" ? "ข่าวทั้งหมด" : "All News",
    category: "news-all",
  });

  return { ...data, data: d };
});

types.value = resTypes.value.data;
</script>

<style scoped>
.brand__item-6 img {
  opacity: 1;
}

.brand__item-6 > .project-link-img:hover {
  /* https://angel-rs.github.io/css-color-filter-generator/ */
  filter: brightness(0) saturate(100%) invert(55%) sepia(77%) saturate(4539%)
    hue-rotate(0deg) brightness(101%) contrast(106%);
}

.bg-grey {
  background-color: var(--tp-common-footer-bg-grey-4);
}

.project-card {
  background-color: #ccc;
  border-color: var(--tp-common-footer-bg-grey-4);
  padding: 10px;
  padding-top: 50px;
  padding-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
}

.card-img-top {
  width: 70%;
  margin-bottom: 10px;
  filter: invert(5%) sepia(40%) saturate(8%) hue-rotate(48deg) brightness(90%)
    contrast(99%);
}

.project-card:hover {
  background-color: var(--tp-theme-1);
}

.project-card:hover .card-img-top {
  filter: none;
}

.project-name {
  font-size: 1.2em;
}
</style>
