<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
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
              <span> {{ $t("Department") }} </span>
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
          <div class="postbox__wrapper" v-if="department_items">
            <!-- Content -->
            <div class="postbox__main">
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
                              type_name: 'ประเภท',
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
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useI18n } from "vue-i18n";
dayjs.extend(buddhistEra);
const { t } = useI18n();

const runtimeConfig = useRuntimeConfig();
const route = useRoute();

const department_items = ref([]);

// fetch
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

useHead({
  title: t("Department"),
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
