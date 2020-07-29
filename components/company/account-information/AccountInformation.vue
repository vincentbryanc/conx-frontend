<template>
    <div>
        <h1 class="title">Account Information</h1>
        <p><b>Company Name: </b> <span>Agents of Value</span></p>
        <p><b>Company Address: </b> <span>5804 Forbes Ave, Pittsburgh, PA 15217</span></p>
        <p><b>Phone Number: </b> <span>(724) 824-1233</span></p>
        <p><b>Email Address: </b> <span>dannysullivan@aov.com</span></p>
        <p><b>Office Number: </b> <span>(724) 824-1233</span></p>
        <p><b>Contact Person: </b> <span>Danny Sullivan</span></p>
        <p><b>Contact Person Role: </b> <span>Owner</span></p>
        <p><b>Contact Person Mobile Number: </b> <span>(724) 824-1233</span></p>
        <p>
            <a-button
                type="primary"
                @click="showModal()"
                v-if="this.$store.state.hascreditcard === false">
                Add Credit Card
            </a-button>
        </p>
        <a-modal v-model="visible" title="Add Credit Card" :width="500">
            <template slot="footer">
                <a-button 
                    type="button" 
                    @click="handleCancel">Cancel <a-icon type="close" /></a-button>
                <a-button 
                    type="primary" 
                    @click="addCreditCard">Submit Now <a-icon type="check" /></a-button>
            </template>
            <div>
                <div class="billing-term-card">
                    Billing terms: $50 per month, starting August 15, 2020
                </div>
                <a-form>
                    <a-form-item label="Card Type">
                        <a-select
                            v-decorator="[
                                'card type',
                                { rules: [{ required: true, message: 'Please select your card type' }] },
                            ]"
                            placeholder="Card Type">
                            <a-select-option value="visa">Visa</a-select-option>
                            <a-select-option value="mastercard">Mastercard</a-select-option>
                            <a-select-option value="jcb">JCB</a-select-option>
                            <a-select-option value="americanexpress">American Express</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="Credit Card Number">
                        <a-input
                            v-decorator="[
                                'creditcardnumber', { rules: [{ required: true, message: 'This field is required' }] },
                            ]"
                            placeholder="Credit Card Number" />
                    </a-form-item>
                    <a-row>
                        <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                            <a-form-item label="CCV">
                                <a-input
                                    v-decorator="[
                                        'ccv', { rules: [{ required: true, message: 'This field is required' }] },
                                    ]"
                                    placeholder="CCV" />
                            </a-form-item>
                        </a-col>
                        <a-col :lg="{ span: 11, offset: 1 }" :md="{ span: 11, offset: 1 }" :sm="{ span: 24 }">
                            <a-form-item label="Expiration Date">
                                <a-input
                                    v-decorator="[
                                        'expirationdate', { rules: [{ required: true, message: 'This field is required' }] },
                                    ]"
                                    placeholder="MM/YY" />
                            </a-form-item>
                        </a-col>
                        <a-form-item>
                            <a-checkbox>Auto-renew Subscription</a-checkbox>
                        </a-form-item>
                    </a-row>
                </a-form>
            </div>
        </a-modal>
    </div>
</template>

<script>
export default {
    name: "AccountInformation",
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleCancel(e) {
            this.visible = false;
        },
        addCreditCard() {
            this.$store.commit("addcreditcard");
            this.handleCancel();
        },
    }
}
</script>

<style>
.billing-term-card {
    background-color: #fff3cd;
    text-align: center;
    padding: 7px;
    font-weight: 700;
    margin-bottom: 10px;
}
.ant-form-item {
    margin-bottom: 5px;
}
</style>