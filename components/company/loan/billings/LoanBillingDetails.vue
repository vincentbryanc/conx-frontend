<template>
    <div>
        <a-row>
            <a-col :lg="{ span: 24 }" :md="{ span: 24 }" :sm="{ span: 24 }">
                <div class="text-right">
                    <a-button>Print <a-icon type="printer"></a-icon></a-button>
                </div>
            </a-col>
            <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                <div>
                    <b>Employee Name: </b> Steve Rogers <br /> 
                </div>
                <div>
                    <b>Duration of Work </b> <br />
                    Start Date: <span>July 20, 2020</span>
                    End Date: <span>July 24, 2020</span>
                </div>
            </a-col>
        </a-row>
        <br />
        <a-row>

        </a-row>
        <br />
        <a-row>
            <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                <a-form>
                    <a-form-item>
                        <label>Other Expenses</label>
                        <a-input
                            placeholder="Other Expenses"></a-input>
                    </a-form-item>
                    <label>Client Request Message</label>
                    <a-form-item>
                        <a-input type="textarea" rows="3" />
                    </a-form-item>
                </a-form>
            </a-col>
            <a-col :lg="{ span: 12 }" :md="{ span: 12 }" :sm="{ span: 24 }">
                <br />
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <b>Subtotal</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <b>$3,400.00</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <b>Service Charge (10%)</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <b>$340.00</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <b>Other Expenses</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <b>$0.00</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <b>Tax</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <b>$374.00</b>
                    </div>
                </a-col>
                <a-col :lg="{ span: 16 }" :md="{ span: 16 }" :sm="{ span: 16 }">
                    <div class="text-right">
                        <h2><b>Invoice Total</b></h2>
                    </div>
                </a-col>
                <a-col :lg="{ span: 8 }" :md="{ span: 8 }" :sm="{ span: 8 }">
                    <div class="text-right">
                        <h2><b>$4,114.00</b></h2>
                    </div>
                </a-col>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    name: "LoanBillingDetails",
}
</script>

<style>

</style>