<template>
    <a-layout :style="{ minHeight: '100vh' }">
        <AppHeader />
        <a-layout :style="{ marginTop: '64px' }">
            <AppSider />
            <a-layout :style="{ padding: '0 24px 24px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Company Name</a-breadcrumb-item>
                    <a-breadcrumb-item>Employees</a-breadcrumb-item>
                    <a-breadcrumb-item>Add New Employee</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content class="layout-content">
                    <a-row>
                        <a-col :lg="{ span: 14, offset: 5 }" :md="{ span: 24 }">
                            <h1 class="title text-center">Add New Employee</h1>
                            <a-form :form="form">
                                <a-row>
                                    <a-col :lg="{ span: 11 }" :md="{ span: 11 }">
                                        <!-- Employee ID -->
                                        <label>Employee ID</label>
                                        <a-form-item>
                                            <a-input
                                                v-decorator="[
                                                    'employeeid', { rules: [{ required: true, message: 'This field is required' }] },
                                                ]"
                                                placeholder="Employee ID">
                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }">
                                        <!-- Date Hired -->
                                        <label>Date Hired</label>
                                        <a-form-item>
                                            <a-date-picker class="date-picker" />
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 11 }" :md="{ span: 11 }">
                                        <!-- First Name -->
                                        <label>First Name</label>
                                        <a-form-item>
                                            <a-input
                                                v-decorator="[
                                                    'firstname', { rules: [{ required: true, message: 'This field is required' }] },
                                                ]"
                                                placeholder="First Name">
                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }">
                                        <!-- Last Name -->
                                        <label>Last Name</label>
                                        <a-form-item>
                                            <a-input
                                                v-decorator="[
                                                    'lastname', { rules: [{ required: true, message: 'This field is required' }] },
                                                ]"
                                                placeholder="Last Name">
                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 11 }" :md="{ span: 11 }">
                                        <!-- Level of Experience -->
                                        <label>Level of Experience</label>
                                        <a-form-item>
                                            <a-select
                                                v-decorator="[
                                                    'levelOfExperience',
                                                    { rules: [{ required: true, message: 'Please select your level of experience' }] },
                                                ]"
                                                placeholder="Level of Experience">
                                                <a-select-option value="master">Master</a-select-option>
                                                <a-select-option value="journeyman">Journeyman</a-select-option>
                                                <a-select-option value="1styear">1st Year</a-select-option>
                                                <a-select-option value="2ndyear">2nd Year</a-select-option>
                                                <a-select-option value="3rdyear">3rd Year</a-select-option>
                                                <a-select-option value="4thyear">4th Year</a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                                <a-row>
                                    <a-col :lg="{ span: 16 }" :md="{ span: 16 }">
                                        <!-- Level of Experience -->
                                        <label>Address (Street, City, State/Province/Region, City, Country)</label>
                                        <a-form-item>
                                            <a-input
                                                v-decorator="[
                                                    'address', { rules: [{ required: true, message: 'This field is required' }] },
                                                ]"
                                                placeholder="Address">
                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 6, offset: 1 }" :md="{ span: 6, offset: 1 }">
                                        <!-- Level of Experience -->
                                        <label>Zip Code</label>
                                        <a-form-item>
                                            <a-input
                                                v-decorator="[
                                                    'zipcode', { rules: [{ required: true, message: 'This field is required' }] },
                                                ]"
                                                placeholder="Zip Code">
                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 8 }" :md="{ span: 8 }">
                                        <!-- Hourly Rate -->
                                        <label>Hourly Rate</label>
                                        <a-form-item>
                                            <a-input
                                                v-decorator="[
                                                    'hourlyrate', { rules: [{ required: true, message: 'This field is required' }] },
                                                ]"
                                                placeholder="Hourly Rate">
                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 14, offset: 1 }" :md="{ span: 14, offset: 1 }">
                                        <!-- Hourly Rate -->
                                        <label>Additional Details</label>
                                        <a-form-item>
                                            <a-input
                                                v-decorator="[
                                                    'additionaldetails', { rules: [{ required: true, message: 'This field is required' }] },
                                                ]"
                                                placeholder="Additional Details">
                                            </a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 23 }" :md="{ span: 23 }">
                                        <label style="marginBottom: 50px">
                                            Areas of Work (Select all that applies) 
                                            <a-button 
                                                type="link">Check/Uncheck all</a-button>
                                        </label>
                                        <a-form-item>
                                            <a-row>
                                                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                                    <a-checkbox>Commercial</a-checkbox><br>
                                                    <a-checkbox>Industrial</a-checkbox><br>
                                                    <a-checkbox>Residential</a-checkbox>
                                                </a-col>
                                                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                                    <a-checkbox>Fire alarm</a-checkbox><br>
                                                    <a-checkbox>Comm / Data</a-checkbox><br>
                                                    <a-checkbox>Traffic</a-checkbox>
                                                </a-col>
                                                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                                                    <a-checkbox>Security</a-checkbox><br>
                                                    <a-checkbox>Automation / Control</a-checkbox><br>
                                                    <a-checkbox>Utility</a-checkbox>
                                                </a-col>
                                            </a-row>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :lg="{ span: 23 }" :md="{ span: 23 }">
                                        <a-form-item>
                                            <div class="text-right">
                                                <nuxt-link to='/company/employees'><a-button type="primary">Cancel <a-icon type="close" /></a-button></nuxt-link>
                                                <nuxt-link to='/company/employees'><a-button type="success">Save <a-icon type="check" /></a-button></nuxt-link>
                                            </div>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </a-form>
                        </a-col>
                    </a-row>
                </a-layout-content>
            </a-layout>
        </a-layout>
        <AppFooter />
    </a-layout>
</template>

<script>
import AppHeader from '../../../components/company/CompanyHeader';
import AppSider from '../../../components/company/CompanySider';
import AppFooter from '../../../components/AppFooter';

export default {
    head() {
        return {
            title: 'Add New Employee',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: ''
                }
            ]
        }
    },
    components: {
        AppHeader,
        AppSider,
        AppFooter,
    },
	beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'company_add_new_employee' });
    },
    created() {
        this.$store.commit('changedefaultselectedkeyandopenkey', {
            selectedkey: 'company-employees',
            openkey: '',
        });
    }
}
</script>

<style scoped>
    .date-picker {
        width: '345px'
    }
    @media only screen and (min-width: 768px) {
        /* For desktop: */
        .date-picker {
            width: '345px'
        }
    }
</style>