<template>
	<div>
		<a-layout id="components-layout-fixed" style="min-height: 100vh">
            <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
                <a-row>
                    <a-col :lg="{ span: 14 }" :md="{ span: 14 }" :sm="{ span: 24 }">
                        <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px', textAlign: 'center' }">
                            <a-menu-item key="1"><nuxt-link to="/">Home</nuxt-link></a-menu-item>
                            <a-menu-item key="2"><nuxt-link to="/about">About</nuxt-link></a-menu-item>
                            <a-menu-item key="3"><nuxt-link to="/history">History</nuxt-link></a-menu-item>
                            <a-menu-item key="4"><nuxt-link to="/services">Services</nuxt-link></a-menu-item>
                            <a-menu-item key="5"><nuxt-link to="/contact">Contact Us</nuxt-link></a-menu-item>
                        </a-menu>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content :style="{ marginTop: '63px' }" >
                <a-row>
                    <a-col :lg="{ span: 14 }" :md="{ span: 14 }">
                        <div class="container-dark text-center logo-container">
                            <img src="~/assets/logo-lg.png" class="logo">
                        </div>
                    </a-col>
                    <a-col :lg="{ span: 10 }" :md="{ span: 10 }">
                        <div class="container">
                            <h1 class="text-center">
                                <a-icon type="lock" :style="{ fontSize: '26px', color: '#FFBB00' }" />
                                COMPANY LOGIN
                            </h1>
                            <a-form id="components-login"
                                :form="form"
                                class="login-form"
                                @submit="handleSubmit">
                                <label>Email Address</label>
                                <a-form-item>
                                    <a-input
                                        v-decorator="[
                                            'emailAddress', { rules: [{ required: true, message: 'Please enter your email address' }] },
                                        ]"
                                        placeholder="Email Address">
                                        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
                                    </a-input>
                                </a-form-item>
                                <label>Password</label>
                                <a-form-item>
                                    <a-input
                                        v-decorator="[
                                        'password',
                                        { rules: [{ required: true, message: 'Please enter your password' }] },
                                        ]"
                                        type="password"
                                        placeholder="Password" >
                                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                                    </a-input>
                                </a-form-item>
                                <a-form-item>
                                    <a-checkbox
                                        v-decorator="[
                                            'remember',
                                            {
                                                valuePropName: 'checked',
                                                initialValue: true,
                                            },
                                        ]" > Remember me
                                    </a-checkbox>
                                    <nuxt-link class="login-form-forgot" to="/">Forgot password</nuxt-link>
                                    <a-button type="primary" html-type="submit" class="login-form-button">
                                        LOGIN
                                    </a-button>
                                    <p class="text-center">
                                        No account yet? <nuxt-link to="/register">Click here to Register.</nuxt-link>
                                        <br>
                                        Are you a skilled worker? <nuxt-link to="/upload-resume">Upload your resume here.</nuxt-link>
                                    </p>
                                </a-form-item>
                            </a-form>
                        </div>
                    </a-col>
                </a-row>
                <a-layout-footer class="text-center">
                    <span>&copy; Copyright Agents of Value 2020</span>
                    <a-divider type="vertical" />
                    <span>All Rights Reserved</span>
                    <a-divider type="vertical" />
                    <span>Terms & Conditions</span>
                    <a-divider type="vertical" />
                    <span>Privacy Policy</span>
                </a-layout-footer>
            </a-layout-content>
		</a-layout>
	</div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
export default {
	 head() {
        return {
            title: 'Home',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Conx Homepage'
                }
            ]
        }
    },
	beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'company_login' });
    },
    methods: {
        handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.$router.push('company/employees');
            }
        });
        },
    },
}
</script>

<style scoped>
.logo {
    float: none;
}

/* Very Small devices (portrait phones, 280px and up) */
@media (min-width: 280px) {
    .logo {
        width: 200px;
    }
}

/* Small devices (portrait phones, 320px and up) */
@media (min-width: 320px) {
    .logo {
        width: 250px;
    }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
    .logo {
        width: 250px;
    }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    .logo {
        margin-top: 25%;
        width: 300px;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    .logo {
        margin-top: 20%;
        width: 350px;
    }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    
}
</style>