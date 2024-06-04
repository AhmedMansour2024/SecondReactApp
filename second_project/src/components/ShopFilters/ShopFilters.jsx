import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import './ShopFilters.css'

export default function ShopFilters({ setFilterQuery }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const res = await fetch("http://localhost:3000/categories");
            const data = await res.json();
            setCategories(data);
        }

        getCategories();
    }, []);


    function handleSubmit(filterValues) {
        const arr = [];
        for (let key in filterValues) {
            if (filterValues[key]) {
                arr.push(`${key}=${filterValues[key]}`);
            }
        }
        setFilterQuery(arr.join("&"));
    }

    return (
        <Formik
            initialValues={
                {
                    q: "",
                    category: "",
                    price_gte: "",
                    price_lte: ""
                }
            }
            onSubmit={handleSubmit}
        >
            {({ resetForm }) => {
                return (
                    <Form className="mb-3 d-flex gap-3">
                        <Field className="shop__input__filter w-100" type="text" name="q" placeholder="Search..." />
                        <Field as="select" className="shop__input__filter w-100" name="category" >
                            <option value="">Choose a category</option>
                            {categories.map((category) => {
                                return (
                                    <option key={`shop-filter-category-${category}`}>{category}</option>
                                );
                            })}
                        </Field>
                        <Field className="shop__input__filter " type="number" name="price_gte" placeholder="Min price" />
                        <Field className="shop__input__filter " type="number" name="price_lte" placeholder="Max price" />
                        <input className="shop__input__filter btn btn-primary" type="submit" />
                        <input
                            className="shop__input__filter btn btn-primary"
                            type="reset"
                            onClick={() => {
                                resetForm();
                                setFilterQuery("")
                            }}
                        />
                    </Form>
                );
            }}
        </Formik >

    );
}
