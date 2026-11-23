<script setup>
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import { Upload } from '@lucide/vue';


const toast = useToast();
const fileupload = ref();

function upload() {
    fileupload.value.upload();
}

function onUpload() {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
}
</script>

<template>
    <div class="grid w-full grid-cols-12 gap-4">
        <div class="col-span-full lg:col-span-6">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Advanced</div>
                <FileUpload
                    name="demo[]"
                    @uploader="onUpload"
                    :multiple="true"
                    accept="image/*"
                    :maxFileSize="1000000"
                    customUpload />
            </div>
        </div>
        <div class="col-span-full lg:col-span-6">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Basic</div>
                <div class="card flex flex-col items-center justify-center gap-6">
                    <FileUpload
                        ref="fileupload"
                        mode="basic"
                        name="demo[]"
                        accept="image/*"
                        :maxFileSize="1000000"
                        @uploader="onUpload"
                        customUpload />
                    <Button @click="upload" severity="secondary">
                        <Upload />
                        Upload
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>
