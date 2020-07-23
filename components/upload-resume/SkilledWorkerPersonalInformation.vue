<template>
    <div>
        <a-form>
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
			<label>First Name</label>
			<a-form-item>
				<a-input
					v-decorator="[
						'firstName', { rules: [{ required: true, message: 'Please enter your first name' }] },
					]"
					placeholder="First Name">
					<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
			<label>Last Name</label>
			<a-form-item>
				<a-input
					v-decorator="[
						'lastName', { rules: [{ required: true, message: 'Please enter your last name' }] },
					]"
					placeholder="Last Name">
					<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
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
            <a-row>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 24 }">
                    <label>Address</label>
                    <a-form-item>
                        <a-input
                            v-decorator="[
                                'address', { rules: [{ required: true, message: 'Please enter your address' }] },
                            ]"
                            placeholder="Address">
                            <a-icon slot="prefix" type="pushpin" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                </a-col>
                <a-col :lg="{ span: 7, offset: 1 }" :md="{ span: 7, offset: 1 }" :sm="{ span: 24 }">
                    <label>Zip Code</label>
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
		</a-form>
    </div>
</template>

<script>
export default {
    name: "SkilledWorkerPersonalInformation"
}
</script>

<style>

</style>