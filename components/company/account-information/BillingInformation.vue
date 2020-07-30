<template>
    <div>
        <h1 class="title">Billing Information <a-icon type="edit" @click="showModal" /></h1>
        <p><b>Card Type: </b> <span>Visa</span></p>
        <p><b>Credit Card Number: </b> <span>**** **** **** 3456</span></p>
        <p><b>Subscription Plan: </b> <span>Full access, $50 per month. Next billing date 08/15/2020</span></p>
        <p><b>Auto-renew Subscription: </b> <span>Yes</span></p>
        <p>
            <a-button
                type="link"
                @click="removeCreditCard">
                Cancel Subscription
            </a-button>
            <nuxt-link to="/company/account-information/billing-history">
                <a-button
                    type="primary">
                    Billing History
                </a-button>
            </nuxt-link>
        </p>
        <a-modal v-model="visible" title="Edit Credit Card Details" :width="500">
            <template slot="footer">
                <a-button 
                    type="button" 
                    @click="handleCancel">Cancel <a-icon type="close" /></a-button>
                <a-button 
                    type="primary"
                    @click="handleCancel">Update <a-icon type="check" /></a-button>
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
        removeCreditCard() {
            this.$store.commit("removecreditcard");
        },
    }
}
</script>

<style>

</style>