<template>
    <div>
        <a-form :wrapper-col="{ span: 24 }">
            <a-row>
                <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                    <label>Expertise</label>
                    <a-form-item>
                        <a-select
                            v-decorator="[
                                'expertise',
                                { rules: [{ required: true, message: 'Please select your expertise' }] },
                            ]"
                            placeholder="Expertise">
                            <a-select-option value="electrical">Electrical</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
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
                <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                    <label>Distance willing to travel (Ex. 50 Miles)</label>
                    <a-form-item>
                        <a-input
                            v-decorator="[
                                'distanceWillingToTravel', { rules: [{ required: true, message: 'Please enter your distance willing to travel' }] },
                            ]"
                            placeholder="Distance willing to travel (Ex. 50 Miles)">
                            <a-icon slot="prefix" type="car" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <label style="marginBottom: 50px">
                Areas of Work (Select all that applies) 
                <a-button 
                    type="link">Check/Uncheck all</a-button>
            </label>
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
        </a-form>
    </div>
</template>

<script>
export default {
    name: "SkilledWorkerWorkInformation"
}
</script>

<style>

</style>