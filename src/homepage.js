import React, { useState, useEffect } from "react";
import { createSearchParams, Link } from "react-router-dom";
import solaris from './images/SolarisFiller.png'
import tokyo from './images/tokyoOtakuMode2.jpg'
import Axios from 'axios'
import './home.css'

export default function HomePage() {
    const [featureHover, setFeatureHover] = useState("")
    const [currentImage, setImage] = useState(1)
    const [currentInterval, setCurrentInterval] = useState("")
    const [hoverCounter, setHoverCounter] = useState(0)
    const [featuredSolaris, setFeaturedSolaris] = useState([])
    const [featuredTOM, setFeaturedTOM] = useState([])
    useEffect(() => {
        Axios.get('https://figurecenter.herokuapp.com/featuredItems', {
            params: {
                store: "SolarisJapan"
            }
        }).then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].images = deseralizeImages(response.data[i].images.toString())
            }
            setFeaturedSolaris(response.data)
        })
        Axios.get('https://figurecenter.herokuapp.com/featuredItems', {
            params: {
                store: "TokyoOtakuMode"
            }
        }).then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].images = deseralizeImages(response.data[i].images.toString())
            }
            setFeaturedTOM(response.data)
        })
        console.log(featuredSolaris)
        console.log(featuredTOM)
        let slidecount = 0
        setInterval(function () {
            if (slidecount < 2) {
                console.log('what')
                slidecount += 1
                setImage(slidecount)
            }
            else {
                console.log('ficl')
                slidecount = 1
                setImage(slidecount)
            }
        }, 7000)
    }, [])


    function nextImage(image) {
        if (image < 2) {
            setImage(currentImage + 1)
        }
        else {
            setImage(1)
        }
    }
    function prevImage(image) {
        if (currentImage > 1) {
            setImage(currentImage - 1)
        }
        else {
            setImage(2)
        }
    }

    function slideShow() {
        switch (currentImage) {
            case 1:
                return (
                    <>
                        <img id='image1' src={solaris} className='image1' style={{ display: 'inline' }}></img>
                        <img id='image2' src={tokyo} className='image2' style={{ display: 'none' }}></img>
                    </>

                )
            case 2:
                return (
                    <>
                        <img id='image1' src={solaris} className='image1' style={{ display: 'none' }}></img>
                        <img id='image2' src={tokyo} className='image2' style={{ display: 'inline' }}></img>
                    </>


                )
        }
    }

    function deseralizeImages(imageString) {
        const lst = []
        while (imageString.indexOf(">>><<<") != -1) {
            const i = imageString.indexOf(">>><<<")
            const temp = imageString.slice(0, i)
            imageString = imageString.slice(i + 6)
            lst.push(temp)
        }
        lst.push(imageString)
        return lst
    }


    function hoverPhoto(product, id) {
        if (featureHover === id) {

            return (
                <div className="productInnerStatic">
                    <a href={product.url} target="_blank">
                        <img className="productImagesAnimated" src={product.images[hoverCounter]} />
                    </a>
                    <div className="featuredTitle"> {product.name} </div>
                    <div className="featuredPrice"> {"Preorder: " + product.preorder + " " + product.rel}</div>
                    <div> {product.website} </div>
                </div>
            )

        } else {
            return (
                <div className="productInnerStatic">
                    <a href={product.url} target="_blank">
                        <img className="FproductImage" src={product.images[0]} />
                    </a>
                    <div className="featuredTitle"> {product.name} </div>
                    <div className="featuredPrice"> {"Preorder: " + product.preorder + " " + product.rel}</div>
                    <div> {product.website} </div>
                </div>
            )
        }
    }

    return (
        <>
            <div className="titleCard">
                <div className="homeFiller">
                    <button onClick={() => prevImage(currentImage)} >Prev</button>
                </div>
                <div className="titleCardBox">
                    {slideShow()}
                </div>
                <div className="homeFiller">
                    <button onClick={() => nextImage(currentImage)}>Next</button>
                </div>
            </div>
            <div className="headerAlignment">
                <div className="featuredHeader">
                    Featured
                </div>
            </div>
            <div className="showCase">
                <div className="SolarisContainer">
                    <div className="featuredContainer">
                        {featuredSolaris.map(product =>
                            <div className="productFeatured" id={product.name}
                                onMouseEnter={() => {
                                    clearInterval(currentInterval)
                                    setFeatureHover(product.name)
                                    let count = 0;
                                    setCurrentInterval(setInterval(function () {
                                        console.log(count)
                                        if (count < product.images.length - 1) {
                                            setHoverCounter(count + 1)
                                            count += 1
                                        }
                                        else {
                                            count = 0
                                            setHoverCounter(count)

                                        }
                                    }, 1250))
                                    if (featureHover != product.name) {
                                        clearInterval(currentInterval)
                                        setHoverCounter(0)
                                    }
                                }}
                                onMouseLeave={() => {
                                    setFeatureHover("")
                                    clearInterval(currentInterval)
                                }}>
                                {hoverPhoto(product, product.name)}
                            </div>)}
                    </div>
                    <Link className="featuredLinks" to={"/search?" + createSearchParams({
                        query: "",
                        filters: "10"
                    }).toString()}>More From Solaris Japan</Link>
                </div>
                <div className="OtakuModeContainer">
                    <div className="featuredContainer">
                        {featuredTOM.map(product =>
                            <div className="productFeatured" id={product.name}
                                onMouseEnter={() => {
                                    clearInterval(currentInterval)
                                    setFeatureHover(product.name)
                                    let count = 0;
                                    setCurrentInterval(setInterval(function () {
                                        console.log(count)
                                        if (count < product.images.length - 1) {
                                            setHoverCounter(count + 1)
                                            count += 1
                                        }
                                        else {
                                            count = 0
                                            setHoverCounter(count)

                                        }
                                    }, 1250))
                                    if (featureHover != product.name) {
                                        clearInterval(currentInterval)
                                        setHoverCounter(0)
                                    }
                                }}
                                onMouseLeave={() => {
                                    setFeatureHover("")
                                    clearInterval(currentInterval)
                                }}>
                                {hoverPhoto(product, product.name)}
                            </div>)}
                    </div>
                    <Link className="featuredLinks" to={"/search?" + createSearchParams({
                        query: "",
                        filters: "01"
                    }).toString()}> More From Tokyo Otaku Mode</Link>
                </div>
            </div>
        </>
    )
}
