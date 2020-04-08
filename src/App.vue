<template>
    <v-app>
        <router-view/>
        <v-bottom-navigation v-model="index" app>
            <v-btn value="/home">Home</v-btn>
            <v-btn value="/mine">Mine</v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        data() {
            return {
                index: "/home"
            }
        },
        watch: {
            index: {
                immediate: true,
                handler: function (val, oldVal) {
                    if (val !== oldVal)
                        this.$router.push({
                            path: val,
                            query: this.$route.query
                        });
                }
            }
        },
    };
</script>
