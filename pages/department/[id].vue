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
                      ><span class="ml-10">การให้บริการ</span>
                    </h4>
                  </div>
                </div>
                <div class="col-md-12 mt-10">
                  <section class="portfolio__area pt-40 pb-40">
                    <div class="container">
                      <div
                        class="row"
                        v-for="(si, idx) in serve_items"
                        :key="idx"
                      >
                        <div class="col-md-12">
                          <h3>{{ si.title }}</h3>
                        </div>
                        <div class="col-md-12">
                          {{ si.detail }}
                        </div>
                        <div><hr class="hr-dotted" /></div>
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
                      ><span class="ml-10">ข้อมูลติดต่อ</span>
                    </h4>
                  </div>
                </div>
                <div class="col-md-12 mt-10">
                  <section class="portfolio__area pt-40 pb-40">
                    <div class="container">
                      <div class="row">
                        <!--  -->
                        {{ item.contact }}
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
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useI18n } from "vue-i18n";
dayjs.extend(buddhistEra);
const { t } = useI18n();

const runtimeConfig = useRuntimeConfig();
const route = useRoute();

const item = ref(null);
const serve_items = ref([]);

// fetch
const { data: res } = await useAsyncData("department", async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/department/${route.params.id}`,
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

const { data: resServes } = await useAsyncData("serve", async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/serve`, {
    params: {
      department_id: route.params.id,
      lang: useCookie("lang").value,
      is_publish: 1,
    },
  });
  return data;
});
serve_items.value = resServes.value.data;

useHead({
  title: item.value.name + " " + t("ServiceCategory"),
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
