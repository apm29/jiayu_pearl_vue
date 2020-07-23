<template>
    <v-app>
        <v-app-bar
                app
                color="white"
                height="100"
        >


            <v-toolbar-title class="font-weight-black headline">
                佳谕珍珠
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <section id="hero">
                <v-row no-gutters>
                    <v-img
                            :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                            src="https://jiayu-pearl-mall.oss-cn-beijing.aliyuncs.com/images/2020/5/11/15891608800396223.JPG?x-oss-process=image/resize,h_1080,w_1920"
                    >
                        <v-theme-provider dark>
                            <v-container fill-height>
                                <v-row
                                        align="center"
                                        class="white--text mx-auto"
                                        justify="center"
                                >
                                    <v-col
                                            class="white--text text-center"
                                            cols="12"
                                            tag="h1"
                                    >
                    <span
                            class="font-weight-light"
                            :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    >
                      WELCOME TO
                    </span>

                                        <br>

                                        <span
                                                :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                                                class="font-weight-black"
                                        >
                      JIAYU PEARL
                    </span>

                                    </v-col>

                                    <v-btn
                                            class="align-self-end"
                                            fab
                                            outlined
                                            @click="$vuetify.goTo('#about-me')"
                                    >
                                        <v-icon>mdi-chevron-double-down</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-container>
                        </v-theme-provider>
                    </v-img>
                </v-row>
            </section>

            <section id="about-me">
                <div class="py-12"></div>

                <v-container class="text-center">
                    <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

                    <v-responsive
                            class="mx-auto mb-8"
                            width="56"
                    >
                        <v-divider class="mb-1"></v-divider>

                        <v-divider></v-divider>
                    </v-responsive>

                    <v-responsive
                            class="mx-auto title font-weight-light mb-8"
                            max-width="720"
                    >
                        诸暨本土珍珠/海水珠/金银配件
                    </v-responsive>

                    <v-avatar
                            class="elevation-12 mb-12"
                            size="128"
                    >
                        <v-img src="https://jiayu-pearl-mall.oss-cn-beijing.aliyuncs.com/images/apm29/default.png"></v-img>
                    </v-avatar>

                    <div></div>

                    <v-btn
                            color="grey"
                            href="/"
                            outlined
                            large
                    >
                        <span class="grey--text text--darken-1 font-weight-bold">
                           Introduction
                        </span>
                    </v-btn>
                </v-container>

                <div class="py-12"></div>
            </section>

            <section
                    id="features"
                    class="grey lighten-3"
            >
                <div class="py-12"></div>

                <v-container class="text-center">
                    <h2 class="display-2 font-weight-bold mb-3">品类</h2>

                    <v-responsive
                            class="mx-auto mb-12"
                            width="56"
                    >
                        <v-divider class="mb-1"></v-divider>

                        <v-divider></v-divider>
                    </v-responsive>

                    <v-row>
                        <v-col
                                v-for="({ icon, title, text ,url }, i) in features"
                                :key="i"
                                cols="12"
                                md="4"
                        >
                            <v-card
                                    class="py-12 px-4"
                                    color="grey lighten-5"
                                    flat
                            >
                                <v-img :src="url">
                                    <v-theme-provider dark>
                                        <div>


                                        </div>
                                    </v-theme-provider>

                                    <v-card-title
                                            class="justify-center font-weight-black text-uppercase white--text"
                                            v-text="title"
                                    ></v-card-title>

                                    <v-card-text
                                            class="subtitle-1"
                                            v-text="text"
                                    >
                                    </v-card-text>
                                </v-img>

                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>

                <div class="py-12"></div>
            </section>

            <section id="stats">
                <v-parallax
                        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
                        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                >
                    <v-container fill-height>
                        <v-row class="mx-auto">
                            <v-col
                                    v-for="[value, title] of stats"
                                    :key="title"
                                    cols="12"
                                    md="3"
                            >
                                <div class="text-center">
                                    <div
                                            class="display-3 font-weight-black mb-4"
                                            v-text="value"
                                    ></div>

                                    <div
                                            class="title font-weight-regular text-uppercase"
                                            v-text="title"
                                    ></div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-parallax>
            </section>

            <section id="blog" v-if="false">
                <div class="py-12"></div>

                <v-container>
                    <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

                    <v-responsive
                            class="mx-auto mb-12"
                            width="56"
                    >
                        <v-divider class="mb-1"></v-divider>

                        <v-divider></v-divider>
                    </v-responsive>

                    <v-row>
                        <v-col
                                v-for="({ src, text, title }, i) in articles"
                                :key="i"
                                cols="12"
                                md="4"
                        >
                            <v-img
                                    :src="src"
                                    class="mb-4"
                                    height="275"
                                    max-width="100%"
                            ></v-img>

                            <h3
                                    class="font-weight-black mb-4 text-uppercase"
                                    v-text="title"
                            ></h3>

                            <div
                                    class="title font-weight-light mb-5"
                                    v-text="text"
                            ></div>

                            <v-btn
                                    class="ml-n4 font-weight-black"
                                    text
                            >
                                Continue Reading
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>

                <div class="py-12"></div>
            </section>

            <v-sheet
                    id="contact"
                    color="#333333"
                    dark
                    tag="section"
                    tile
            >
                <div class="py-12"></div>

                <v-container>
                    <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

                    <v-responsive
                            class="mx-auto mb-12"
                            width="56"
                    >
                        <v-divider class="mb-1"></v-divider>

                        <v-divider></v-divider>
                    </v-responsive>

                    <v-theme-provider light>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                        flat
                                        label="Name*"
                                        v-model="form.name"
                                        solo
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                        flat
                                        label="Email*"
                                        v-model="form.email"
                                        solo
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-text-field
                                        flat
                                        label="Subject*"
                                        v-model="form.subject"
                                        solo
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-textarea
                                        flat
                                        label="Message*"
                                        v-model="form.message"
                                        solo
                                ></v-textarea>
                            </v-col>

                            <v-col
                                    class="mx-auto"
                                    cols="auto"
                            >
                                <v-btn
                                        color="accent"
                                        x-large
                                        @click="submit"
                                >
                                    提交
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-theme-provider>
                </v-container>

                <div class="py-12"></div>
            </v-sheet>
        </v-content>

        <v-footer
                class="justify-center"
                color="#292929"
                height="100"
        >
            <div class="title font-weight-light grey--text text--lighten-1 text-center">
                &copy; {{ (new Date()).getFullYear() }} — LLC — Made with 💜 by apm29
            </div>
        </v-footer>
    </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',

    data () {
      return {
        articles: [
          {
            src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Mobile first & Responsive',
            text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
          },
          {
            src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Think outside the box',
            text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
          },
          {
            src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            title: 'Small changes, big difference',
            text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
          },
        ],
        features: [
          {
            icon: 'mdi-account-group-outline',
            url: 'https://jiayu-pearl-mall.oss-cn-beijing.aliyuncs.com/images/akoya%E8%80%B3%E9%92%89/IMG_8757.JPG',
            title: '淡水珠',
          },
          {
            icon: 'mdi-update',
            url: 'https://jiayu-pearl-mall.oss-cn-beijing.aliyuncs.com/images/%E5%8D%97%E6%B4%8B%E9%87%91%E7%8F%A0%E8%B7%AF%E8%B7%AF%E9%80%9A%E5%90%8A%E5%9D%A0/IMG_8772.JPG',
            title: '海水珠',
          },
          {
            icon: 'mdi-shield-outline',
            url: 'https://jiayu-pearl-mall.oss-cn-beijing.aliyuncs.com/images/%E7%BA%AF%E9%93%B6%E8%91%AB%E8%8A%A6%E9%A1%B9%E9%93%BE/IMG_8771.JPG',
            title: '配件',
          },
        ],
        stats: [
          ['24k', '金配件'],
          ['330+', '品类'],
          ['诸暨', '货源地'],
        ],
        form: {},
      }
    },

    methods: {
      submit: async function () {
        let response = await axios({
          url: "/dashboard/submitContactInfo",
          method: 'post',
          data: this.form,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log(response)
      },
    },
  }
</script>
