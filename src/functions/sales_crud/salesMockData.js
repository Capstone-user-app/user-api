const salesMockData = [{
  packageId: 'de933a81-3549-47f8-a21e-3d78f6aa8764',
  pinflagId: 'y676au',
  saleOrder: '001234567',
  packageStatus: 7,
  state: 'Valparaíso',
  stateId: 5,
  city: 'El Tabo',
  cityId: 5605,
  clickAndCollect: true,
  evidencePhoto: null,
  height: 12,
  width: 12,
  length: 30,
  position: null,
  warehouseName: 'Bodega testing',
  warehouseId: 15,
  deliveryAddress: 'La direccion 1234',
  deliveryInstructions: null,
  clientEmail: 'g4-capstone@pinflag.cl',
  clientName: 'Obiwan Kenobi',
  clientLastName: '',
  clientPhone: '+56911223344',
  products: [
    {
      productName: 'Polera roja',
      sku: '1111',
      price: 1222,
      weight: 12,
      photoUrl: [
        {
          URLIMAGEN: 'https://via.placeholder.com/200x120.png'
        }
      ]
    },
    {
      productName: 'Polera negra',
      sku: '1112',
      price: 1222,
      weight: 12,
      photoUrl: [
        {
          URLIMAGEN: 'https://via.placeholder.com/200x120.png'
        },
        {
          URLIMAGEN: 'https://via.placeholder.com/200x120.png'
        }
      ]
    }
  ],
  packageHistory: [
    {
      packageStatus: 1,
      date: '2022-03-11T02:27:35.243Z'
    },
    {
      packageStatus: 2,
      date: '2022-03-11T02:30:26.493Z'
    },
    {
      packageStatus: 3,
      date: '2022-03-11T02:31:25.020Z'
    },
    {
      packageStatus: 4,
      date: '2022-03-11T02:35:56.873Z'
    },
    {
      packageStatus: 7,
      date: '2022-03-11T02:38:37.067Z'
    }
  ],
  trackingNumber: null,
  courier: 'bluexpress',
  shippingCost: {
    price: 125,
    courier: 'bluexpress',
    delivery_time: '2-5 días hábiles'
  },
  cost: 11111
}
]

export { salesMockData }
