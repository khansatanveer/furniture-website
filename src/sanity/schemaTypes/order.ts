const order= {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "LastName",
      type: "string",
    },
    {
      name: "address",
      title: " Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
      
    },
    {
      name: "zipcode",
      title: "Zipcode",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone ",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "discount",
      title: "Discount",
      type: "number",
    },

    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of : [{type : 'reference', to : [{type : 'product'}]}]
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "Status",
      title: "Order Status",
      type: "string",
      options:{
        list : [
          { title:'Pending' , value : 'pending' },
          { title:'Success', value : 'success' },
          { title:'Dispatch', value : 'dispatch' },
      ],
      layout : 'radio'
      },
      initialValue : 'pending'
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(), // Automatically set the current date and time
    }, 
  ],
}

export default order;