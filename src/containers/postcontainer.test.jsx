import React from 'react'; 
import { render, screen, waitFor, fireEvent } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event'
import PostContainer from './PostContainer'; 


describe('post container test', () => {
    //get
    it('displays json results when given a GET request', async () => {
        render(<PostContainer />); 

        // screen.getByText('Loading...'); 

        const input = await screen.findByLabelText('URL Here');
        userEvent.type(input, 'https://jsonplaceholder.typicode.com/todos/1')

        const radio = await screen.findByLabelText('GET')
        fireEvent.change(radio, { target: {value: 'get'}})

        const submitButton = await screen.findByRole('button', {
            name: 'submit-url'
        }); 
        userEvent.click(submitButton)

        return waitFor(() => {
            const jsonResults = screen.getByText('userId', { exact: false }); 
            expect(jsonResults).not.toBeEmptyDOMElement(); 
        });

    });

    //post
    it('displays json results when given a POST request', async () => {
        render(<PostContainer />); 

        // screen.getByText('Loading...'); 

        const input = await screen.findByLabelText('URL Here');
        userEvent.type(input, 'https://jsonplaceholder.typicode.com/posts')

        const radio = await screen.findByLabelText('POST')
        fireEvent.change(radio, { target: {value: 'post'}})

        const json = await screen.findByPlaceholderText('json here')
        userEvent.type(json, JSON.stringify({
            "title": "foo",
            "body": "bar",
            "userId": "1",
          }))

        const submitButton = await screen.findByRole('button', {
            name: 'submit-url'
        }); 
        userEvent.click(submitButton)

        return waitFor(() => {
            const jsonResults = screen.getByText('userId', { exact: false }); 
            expect(jsonResults).not.toBeEmptyDOMElement(); 
        });

    });

        //put
        it('displays json results when given a PUT request', async () => {
            render(<PostContainer />); 
    
            // screen.getByText('Loading...'); 
    
            const input = await screen.findByLabelText('URL Here');
            userEvent.type(input, 'https://jsonplaceholder.typicode.com/posts')
    
            const radio = await screen.findByLabelText('PUT')
            fireEvent.change(radio, { target: {value: 'put'}})
    
            const json = await screen.findByPlaceholderText('json here')
            userEvent.type(json, JSON.stringify({
                "id": "1",
                "title": "foo",
                "body": "bar",
                "userId": "1",
              }))
    
            const submitButton = await screen.findByRole('button', {
                name: 'submit-url'
            }); 
            userEvent.click(submitButton)
    
            return waitFor(() => {
                const jsonResults = screen.getByTestId('results', { exact: false }); 
                expect(jsonResults).not.toBeEmptyDOMElement(); 

                      
                }); 
            });

        //delete
        it('returns an empty object for json results when given a DELETE request', async () => {
            render(<PostContainer />); 
    
            // screen.getByText('Loading...'); 
    
            const input = await screen.findByLabelText('URL Here');
            userEvent.type(input, 'https://jsonplaceholder.typicode.com/posts/1')
    
            const radio = await screen.findByLabelText('DELETE')
            fireEvent.change(radio, { target: {value: 'delete'}})
    
            const submitButton = await screen.findByRole('button', {
                name: 'submit-url'
            }); 
            userEvent.click(submitButton)
    
            return waitFor(() => {
                const jsonResults = screen.getByText('userId', { exact: false }); 
                console.log(jsonResults);
                expect(jsonResults).not.toBeEmptyDOMElement(); 
            });
            });
    
        });
