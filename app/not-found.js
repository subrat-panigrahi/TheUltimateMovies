'use client';
import Link from 'next/link';
import React from 'react';
import ImageBuilder from '../lib/components/ImageBuilder';
import { PAGE_NOT_FOUND, HOME_PAGE } from '../lib/constants';
import logo from './logo.webp';

//Custom page not found component
export default function ErrorPage() {
    return (
        <div class="flex h-screen">
            <div class="m-auto text-center">
                <ImageBuilder src={logo} width='200' height='200' alt='404' priority/>
                <h3>{PAGE_NOT_FOUND}</h3>
                <Link href="/">{HOME_PAGE}</Link>
            </div>
        </div>
    )
}
