<template>
  <HomeBanner />
  <HomeCategory />
  <HomeNews />
</template>

<script setup>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

useHead({
  title:
    "งานบริการวิชาการ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
  meta: [
    {
      name: " งานบริการวิชาการ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
      content: "งานบริการวิชาการ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
    },
  ],
});

if (process.client) {
  if (localStorage.getItem("login")) {
    useToast("เข้าสู่ระบบเสร็จสิ้น", "success");
    localStorage.removeItem("login");
  }

  //   if (localStorage.getItem("logout")) {
  //     useToast("ออกจากระบบเสร็จสิ้น", "success");
  //     localStorage.removeItem("logout");
  //   }
}

definePageMeta({
  middleware: "auth",
});
</script>
