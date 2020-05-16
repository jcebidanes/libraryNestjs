import { Controller, Get, Param, Post, Delete, Query, Req, Request, HttpException } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService){}

    @Get()
    async getBooks(){
        return await this.bookService.getBooks();
    }

    @Get(':id')
    async getBook(@Param('id') id) {
        return await this.bookService.getBook(id)
                        .catch(err => {
                            if (err.name === "EntityNotFound") {
                                throw new HttpException(`Book with id ${id} doesn't exist!`, 404);
                            }
                        });
        
    }

    @Post()
    async addBook(@Req() request: Request) {
        return await this.bookService.addBook(request.body);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id){
        return await this.bookService.deleteBook(id);
    }

}
