<template>
    <div>
        <a-form>
			<label>Company Name</label>
			<a-form-item>
				<a-input
					v-decorator="[
						'companyName', { rules: [{ required: true, message: 'Please enter your company name' }] },
					]"
					placeholder="Company Name">
					<a-icon slot="prefix" type="bank" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
			<a-row>
                <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                    <label>Company Address Street</label>
                    <a-form-item>
                        <a-input
                            v-decorator="[
                                'addressstreet', { rules: [{ required: true, message: 'Please enter your street' }] },
                            ]"
                            placeholder="Street">
                            <a-icon slot="prefix" type="pushpin" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                </a-col>
                <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                    <label>Company Address City</label>
                    <a-form-item>
                        <a-input
                            v-decorator="[
                                'city', { rules: [{ required: true, message: 'Please enter your city' }] },
                            ]"
                            placeholder="City">
                            <a-icon slot="prefix" type="pushpin" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                </a-col>
                <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                    <label>Company Address State</label>
                    <a-form-item>
                        <a-input
                            v-decorator="[
                                'state', { rules: [{ required: true, message: 'Please enter your state' }] },
                            ]"
                            placeholder="State">
                            <a-icon slot="prefix" type="pushpin" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                </a-col>
                <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                    <label>Company Address Zip Code</label>
                    <a-form-item>
                        <a-input
                            v-decorator="[
                                'zipcode', { rules: [{ required: true, message: 'Please enter your zip code' }] },
                            ]"
                            placeholder="Zip Code">
                            <a-icon slot="prefix" type="pushpin" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                    <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                        <label>Phone Number</label>
                        <a-form-item>
                            <a-input
                                v-decorator="[
                                    'phoneNumber', { rules: [{ required: true, message: 'Please enter your phone number' }] },
                                ]"
                                placeholder="Phone Number">
                                <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                        <label>Office Number</label>
                        <a-form-item>
                            <a-input
                                v-decorator="[
                                    'officeNumber', { rules: [{ required: true, message: 'Please enter your office number' }] },
                                ]"
                                placeholder="Office Number">
                                <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-item>
                    </a-col>
            </a-row>
			<label>Contact Person</label>
			<a-form-item>
				<a-input
					v-decorator="[
						'contactPerson', { rules: [{ required: true, message: 'Please enter your contact person' }] },
					]"
					placeholder="Contact Person">
					<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
            <a-row>
                    <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                        <label>Contact Person Role</label>
                        <a-form-item>
                            <a-input
                                v-decorator="[
                                    'contactPersonRole', { rules: [{ required: true, message: 'Please enter your contact person role' }] },
                                ]"
                                placeholder="Contact Person Role">
                                <a-icon slot="prefix" type="folder" style="color: rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                        <label>Contact Person Mobile Number</label>
                        <a-form-item>
                            <a-input
                                v-decorator="[
                                    'contactPersonMobileNumber', { rules: [{ required: true, message: 'Please enter your contact person mobile number' }] },
                                ]"
                                placeholder="Contact Person Mobile Number">
                                <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
                            </a-input>
                        </a-form-item>
                    </a-col>
            </a-row>
        </a-form>
    </div>
</template>

<script>
export default {
    name: "CompanyDetailsForm"
}
</script>

<style>

</style>