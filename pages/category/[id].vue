<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12" v-if="item != null">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span>
                <NuxtLink
                  :to="{
                    path: '/',
                  }"
                >
                  {{ $t("Home") }}
                </NuxtLink>
              </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> {{ item.name }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
  <section class="postbox__area pt-40 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="postbox__wrapper" v-if="item">
            <!-- Content -->
            <div class="postbox__main">
              <div class="row">
                <div
                  class="col-sm-12 col-md-12 col-12"
                  style="border-left: 0.7em solid rgb(255, 203, 5)"
                >
                  <!-- <h2>{{ item.title }}</h2> -->
                  <h2 style="color: rgb(255, 203, 5)">
                    {{ item.name }}
                  </h2>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <div class="postbox__main-wrapper">
                    <div class="postbox__details-content-wrapper mt-40">
                      <div
                        v-html="item.detail == null ? '' : item.detail"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                    <h4>
                      <i class="fa-solid fa-coins"></i
                      ><span class="ml-10">หน่วยงาน</span>
                    </h4>
                  </div>
                </div>
                <div class="col-md-12 mt-10">
                  <section class="portfolio__area pt-40 pb-40">
                    <div class="container">
                      <div class="row">
                        <div
                          v-for="(it, i) in department_items"
                          :key="i"
                          class="col-xxl-3 col-xl-3 col-lg-6 col-md-6"
                        >
                          <department-grid-item
                            :item="{
                              link: '/department/',
                              id: it.id,
                              title: it.name,
                              file: 'asdasdasd',
                              type_name: item.name,
                            }"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                    <h4>
                      <i class="fa-solid fa-coins"></i
                      ><span class="ml-10">ข่าว</span>
                    </h4>
                  </div>
                </div>
                <div class="col-md-12 mt-10">
                  <section class="portfolio__area pt-40 pb-40">
                    <div class="container">
                      <div class="row gx-2 grid">
                        <div
                          v-for="(it, i) in news_items"
                          :key="i"
                          class="col-xxl-3 col-xl-3 col-lg-6 col-md-6"
                        >
                          <NewsGridItem
                            :item="{
                              link: '/news/',
                              id: it.id,
                              title: it.title,
                              file: it.news_file,
                              type_name: it.news_type.name,
                            }"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <!-- end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DepartmentGridItem from "~/components/list/DepartmentGridItem.vue";
import NewsGridItem from "~/components/list/GridItem.vue";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useI18n } from "vue-i18n";
dayjs.extend(buddhistEra);
const { t } = useI18n();

const runtimeConfig = useRuntimeConfig();
const route = useRoute();

const item = ref(null);
const department_items = ref([]);
const news_items = ref([]);

// fetch
const { data: res } = await useAsyncData("serviceCategory", async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/service-category/${route.params.id}`,
    {
      params: {
        lang: useCookie("lang").value,
        is_publish: 1,
      },
    }
  );
  return data;
});
item.value = res.value.data;

const { data: resDepartments } = await useAsyncData("department", async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/department`, {
    params: {
      service_category_id: route.params.id,
      lang: useCookie("lang").value,
      is_publish: 1,
    },
  });
  return data;
});
department_items.value = resDepartments.value.data;

const { data: resNews } = await useAsyncData("news", async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/news`, {
    params: {
      service_category_id: route.params.id,
      lang: useCookie("lang").value,
      is_publish: 1,
    },
  });
  return data;
});
news_items.value = resNews.value.data;

useHead({
  title: item.value.name + " " + t("ServiceCategory"),
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
