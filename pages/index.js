import React, { Component } from 'react'
import Link from 'next/link'

class Index extends Component {
  render() {
    return (
      <main>
        <Link href={'/dashboard'} prefetch>
          <button>登陆</button>
        </Link>
        <style jsx>{`
          button {
            position: absolute;
            top: -20%;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 260px;
            height: 68px;
            color: #fff;
            font-size: 2em;
            font-weight: 600;
            background: none;
            border: 2px solid #fff;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            letter-spacing: 0.1em;
            transition: all 0.1s ease-in-out;
          }
          button:hover {
            border-color: #24c6dc;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2),
              0 15px 20px rgba(0, 0, 0, 0.1);
            transform: scale(1.05) translateY(-2px) translateZ(0);
          }
        `}</style>
        <style jsx global>{`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol' !default;
            background: #24c6dc;
            background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
            background: linear-gradient(to right, #514a9d, #24c6dc);
          }
        `}</style>
      </main>
    )
  }
}

export default Index
