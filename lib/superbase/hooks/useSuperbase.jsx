import React, { useState } from 'react';
import { superbase } from '../products'

export const useSuperbase = () => {
    const [productArr, setProductArr] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const [categoryData, setCategoryData] = useState([]);
    // const [singleProduct, setSingleProduct] = useState([]);

    const fetchAllData = async () => {
        // let { data, error } = await superbase.from('products').select('*')
        // if (data) {
        //     setProductArr(data)
        //     console.log(data)
        // } else {
        //     console.log('error occured in fetching productArr')
        //     console.log(error)
        // }
        try {
            const data = await superbase.from('products').select('*')
            setProductArr(data)
            // console.log(data)
        } catch (error) {
            console.log('error occured in fetching productArr')
            console.log(error)
        }
    }

    const fetchFilteredData = async (item) => {
        try {
            // only checking single condition
            // const data = await superbase.from('products').select('*').ilike('title', `%${item}%`)

            // checking multiple or conditions
            const { data } = await superbase.from('products').select('*').or(`title.ilike.%${item}% , description.ilike.%${item}%, category.ilike.%${item}%`)
            setFilterData(data)
            // console.log(data)
        } catch (error) {
            console.log('error occured in fetching filterData')
            console.log(error)
        }
    }

    const getProductDetail = async (id) => {
        try {
            const { data } = await superbase.from('products').select('*').eq('id', id)
            setSingleProduct(data[0])
            // console.log(data[0])
        } catch (error) {
            console.log('error occured in fetching SingleProduct Data')
            console.log(error)
        }
    }

    const getCategoryWiseData = async (category) => {
        try {
            const { data } = await superbase.from('products').select('*').eq('category', category)
            setCategoryData(data)
            // console.log(data)
        } catch (error) {
            console.log('Error occured in fetching category wise data')
            console.log(error)
        }
    }
    return { productArr, filterData, singleProduct, categoryData, fetchAllData, fetchFilteredData, getProductDetail, getCategoryWiseData }
}
