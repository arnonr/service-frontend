<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>
                <NuxtLink href="/admin/department">
                  รายการหน่วยงาน
                </NuxtLink></span
              >
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> เพิ่มข้อมูล </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40 pb-40">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4>แบบฟอร์มเพิ่มข้อมูลหน่วยงาน</h4>
        </div>

        <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
          <h4>
            <i class="fa-solid fa-edit"></i>
            <span class="ml-10">ภาษาไทย</span>
          </h4>
        </div>

        <div class="col-12">
          <div class="card" style="border: none">
            <div class="card-body">
              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ประเภทการบริการวิชาการ :
                </label>
                <div class="col-sm-9">
                  <v-select
                    label="title"
                    placeholder="ประเภทการบริการวิชาการ"
                    :options="selectOptions.service_categories"
                    id="slt-member-status"
                    v-model="item.service_category_id"
                    class="form-control v-select-no-border"
                    multiple
                    :clearable="true"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ลำดับ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-organization"
                    v-model="item.level"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ชื่อหน่วยงาน :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-organization"
                    v-model="item.name_th"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>รูปภาพปก :
                </label>
                <div class="col-sm-9">
                  <input
                    ref="file"
                    class="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>รายละเอียดหน่วยงาน :
                </label>
                <div class="col-sm-9">
                  <client-only>
                    <froala
                      tag="textarea"
                      :config="config.detail_th"
                      v-model="item.detail_th"
                    ></froala>

                    <div id="detail-th"></div>
                  </client-only>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ข้อมูลติดต่อ :
                </label>
                <div class="col-sm-9">
                  <client-only>
                    <froala
                      tag="textarea"
                      :config="config.contact_th"
                      v-model="item.contact_th"
                    ></froala>

                    <div id="contact-th"></div>
                  </client-only>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>สถานะ :
                </label>
                <div class="col-sm-9">
                  <v-select
                    label="name_th"
                    placeholder="การเผยแพร่"
                    :options="selectOptions.publishes"
                    id="slt-is_publish"
                    v-model="item.is_publish"
                    class="form-control v-select-no-border"
                    :clearable="true"
                  ></v-select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
          <h4>
            <i class="fa-solid fa-edit"></i>
            <span class="ml-10">English</span>
          </h4>
        </div>

        <div class="col-12">
          <div class="card" style="border: none">
            <div class="card-body">
              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  >ชื่อหน่วยงาน :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-organization"
                    v-model="item.name_en"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  >รายละเอียดหน่วยงาน :
                </label>
                <div class="col-sm-9">
                  <client-only>
                    <froala
                      tag="textarea"
                      :config="config.detail_en"
                      v-model="item.detail_en"
                    ></froala>

                    <div id="detail-en"></div>
                  </client-only>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ข้อมูลติดต่อ :
                </label>
                <div class="col-sm-9">
                  <client-only>
                    <froala
                      tag="textarea"
                      :config="config.contact_en"
                      v-model="item.contact_en"
                    ></froala>

                    <div id="contact-en"></div>
                  </client-only>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-20">
          <div class="contact__btn-2 text-center">
            <button class="btn btn-warning" @click="onSubmit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import booking_data from "~~/mixins/bookingData";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const runtimeConfig = useRuntimeConfig();
const router = useRouter();

const item = ref({
  name_th: null,
  name_en: null,
  detail_th: "",
  detail_en: "",
  contact_th: "",
  contact_en: "",
  level: "",
  service_category_id: [],
  is_publish: {
    id: 1,
    value: 1,
    name_th: "publish",
    name_en: "publish",
    color: "success",
  },
});
const file = ref(null);

const selectOptions = ref({
  publishes: booking_data.data().publishes,
  service_categories: [],
});

const format = (date) => {
  const day = dayjs(date).locale("th").format("DD");
  const month = dayjs(date).locale("th").format("MMM");
  const year = date.getFullYear() + 543;

  return `${day} ${month} ${year}`;
};

const r = (Math.random() + 1).toString(36).substring(7);

let config = {};

config["detail_th"] = booking_data.data().froala_config();
config["detail_th"]["events"] = {
  keyup: function (inputEvent) {
    item.value.detail_th = this.html.get();
  },
  click: function (clickEvent) {
    item.value.detail_th = this.html.get();
  },
  "commands.after": function (cmd, param1, param2) {
    item.value.detail_th = this.html.get();
  },
  "paste.after": function (pasteEvent) {
    item.value.detail_th = this.html.get();
  },
  initialized: function () {
    this.html.insert(item.value.detail_th);
  },
};

config["detail_en"] = booking_data.data().froala_config();
config["detail_en"]["events"] = {
  keyup: function (inputEvent) {
    item.value.detail_en = this.html.get();
  },
  click: function (clickEvent) {
    item.value.detail_en = this.html.get();
  },
  "commands.after": function (cmd, param1, param2) {
    item.value.detail_en = this.html.get();
  },
  "paste.after": function (pasteEvent) {
    item.value.detail_en = this.html.get();
  },
  initialized: function () {
    this.html.insert(item.value.detail_en);
  },
};

config["contact_th"] = booking_data.data().froala_config();
config["contact_th"]["events"] = {
  keyup: function (inputEvent) {
    item.value.contact_th = this.html.get();
  },
  click: function (clickEvent) {
    item.value.contact_th = this.html.get();
  },
  "commands.after": function (cmd, param1, param2) {
    item.value.contact_th = this.html.get();
  },
  "paste.after": function (pasteEvent) {
    item.value.contact_th = this.html.get();
  },
  initialized: function () {
    this.html.insert(item.value.contact_th);
  },
};

config["contact_en"] = booking_data.data().froala_config();
config["contact_en"]["events"] = {
  keyup: function (inputEvent) {
    item.value.contact_en = this.html.get();
  },
  click: function (clickEvent) {
    item.value.contact_en = this.html.get();
  },
  "commands.after": function (cmd, param1, param2) {
    item.value.contact_en = this.html.get();
  },
  "paste.after": function (pasteEvent) {
    item.value.contact_en = this.html.get();
  },
  initialized: function () {
    this.html.insert(item.value.contact_en);
  },
};

// Function Fetch
const fetchServiceCategories = async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/service-category`, {
    params: {
      is_publish: 1,
    },
  }).catch((error) => error.data);

  selectOptions.value.service_categories = data.data.map((e) => {
    return { title: e.name_th, value: e.id };
  });
};

// Event
const onSubmit = async () => {
  console.log(item.value);
  //   if (
  //     item.value.is_publish == null ||
  //     item.value.is_publish.id == null ||
  //     item.value.service_category_id == null ||
  //     item.value.name_th == "" ||
  //     item.value.name_th == null ||
  //     item.value.detail_th == "" ||
  //     item.value.detail_th == null
  //   ) {
  //     useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
  //     return;
  //   }

  let type_object = {
    text_success: "เพิ่มรายการเสร็จสิ้น",
    method: "post",
    url: runtimeConfig.public.apiBase + "/department/",
  };

  let service_category_id_arr = [];
  if (item.value.service_category_id.length != 0) {
    item.value.service_category_id.forEach((el) => {
      service_category_id_arr.push(el.value);
    });
  }

  let data = {
    ...item.value,
    department_file: file.value.files != null ? file.value.files[0] : null,
    service_category_id:
      item.value.service_category_id == null
        ? undefined
        : service_category_id_arr,
    is_publish: item.value.is_publish.value,
  };

  var form_data = new FormData();
  for (var key in data) {
    form_data.append(key, data[key]);
  }

  await $fetch(type_object.url, {
    method: type_object.method,
    body: form_data,
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast(type_object.text_success, "success");
        router.push({ path: "/admin/department/" });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

onMounted(() => {
  fetchServiceCategories();
});

useHead({
  title: "เพิ่มหน่วยงาน",
});
</script>
