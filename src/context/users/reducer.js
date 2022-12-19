export const initialState = {
  data: [
    {
      id: 1,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-01-28',
      delivery_cost: 'Публичная оферта от 2020-04-12',
    },
    {
      id: 2,
      status: 'signed',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-18',
      delivery_cost: 'Публичная оферта от 2021-04-12',
    },
    {
      id: 3,
      status: 'pending',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2023-02-28',
      delivery_cost: 'Публичная оферта от 2022-04-12',
    },
    {
      id: 4,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-28',
      delivery_cost: 'Публичная оферта от 2020-04-12',
    },
    {
      id: 5,
      status: 'pending',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-18',
      delivery_cost: 'Публичная оферта от 2020-04-12',
    },
    {
      id: 6,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-28',
      delivery_cost: 'Публичная оферта от 2020-04-12',
    },
    {
      id: 7,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-03-28',
      delivery_cost: 'Публичная оферта от 2020-04-12',
    },
    {
      id: 8,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-28',
      delivery_cost: 'Публичная оферта от 2020-04-12',
    },
    {
      id: 9,
      status: 'draft',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-28',
      delivery_cost: 'Публичная оферта от 2020-04-13',
    },
    {
      id: 10,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-28',
      delivery_cost: 'Публичная оферта от 2020-04-12',
    },
    {
      id: 11,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-28',
      delivery_cost: 'Публичная оферта от 2020-04-13',
    },
    {
      id: 12,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 2021-02-28',
      delivery_cost: 'Публичная оферта от 2020-04-12',
    },
  ],
  page: 10,
  size: 1,
  status: 'all',
  doc_type: 'all',
  counterparty: 'all',
  doc_date: 'all',
  contract_date: 'all',
};

export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return {
        ...state,
        data: action.payload,
      };
    case 'setSize':
      return {
        ...state,
        size: action.payload,
      };
    case 'setPage':
      return {
        ...state,
        page: action.payload,
      };
    case 'setStatus':
      return {
        ...state,
        status: action.payload,
      };
    case 'doc_type':
      return {
        ...state,
        doc_type: action.payload,
      };
    case 'counterparty':
      return {
        ...state,
        counterparty: action.payload,
      };
    case 'doc_date':
      return {
        ...state,
        doc_date: action.payload,
      };
    case 'contract_date':
      return {
        ...state,
        contract_date: action.payload,
      };

    default:
      return state;
  }
};
