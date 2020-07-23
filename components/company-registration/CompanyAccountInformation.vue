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
			<label>Password</label>
			<a-form-item>
				<a-input
					v-decorator="[
						'password', { rules: [{ required: true, message: 'Please enter your password' }] },
					]"
					placeholder="Password">
					<a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
				</a-input>
			</a-form-item>
			<label>Confirm Password</label>
			<a-form-item>
				<a-input
					v-decorator="[
						'confirmPassword', { rules: [{ required: true, message: 'Please confirm your password' }] },
					]"
					placeholder="Confirm Password">
					<a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
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
		</a-form>
	</div>
</template>

<script>
export default {
	name: "CompanyAccountInformationForm"
}
</script>

<style>

</style>