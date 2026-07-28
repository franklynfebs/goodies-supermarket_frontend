import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomerInfo from "./CustomerInfo";
import DeliveryAddress from "./DeliveryAddress";
import PaymentMethod from "./PaymentMethod";
import PlaceOrderButton from "./PlaceOrderButton";

import {
  checkoutSchema,
  type CheckoutFormData,
} from "../../schemas/checkoutSchema";

export default function CheckoutForm() {
  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      region: "",
      postalCode: "",
      paymentMethod: "cash",
    },
  });

  function onSubmit(data: CheckoutFormData) {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <CustomerInfo />

        <DeliveryAddress />

        <PaymentMethod />

        <PlaceOrderButton />
      </form>
    </FormProvider>
  );
}