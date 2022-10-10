import React from 'react';
import {DataGrid} from "@mui/x-data-grid";

const CartPage = ({productsList}) => {

    const columns = [
        {field: 'lastName', headerName: 'Produit', width: 250},
        {
            field: 'age',
            headerName: 'Qté',
            type: 'number',
            width: 80,
        },
        {
            field: 'price',
            headerName: 'Prix',
            type: 'number',
            width: 90,
        },
        {
            field: 'value',
            headerName: 'Valeur',
            type: 'number',
            width: 90,
        },
    ];

    return (
        <div className="cart-page" style={{flexDirection: "column"}}>
            <h1>Votre panier</h1>
            <h2>Total 130€</h2>
            <div style={{height: 400, width: '100%', marginTop: "1vh"}}>
                <DataGrid
                    rows={productsList.sort(function compare(a, b) {
                        if (a.id < b.id) return -1;
                        if (a.id > b.id) return 1;
                        return 0;
                    })
                        .map((item) => (
                            {
                                id: parseInt(item.id),
                                lastName: item.name,
                                age: item.stock,
                                price: parseFloat(item.price).toFixed(2) + "€",
                                value: parseFloat(item.stock * item.price).toFixed(2) + "€",
                                selectionModel: ["id"],
                                density: 'compact',
                            }
                        ))}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    className="datagrid"
                />

            </div>
        </div>
    );
};

export default CartPage;