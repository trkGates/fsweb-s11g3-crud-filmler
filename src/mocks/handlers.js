import { rest } from 'msw'
import Data from './data'

function getAll(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(Data.getAll())
  );
}

function getById(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(Data.getById(req.params.id))
  );
}

function create(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(Data.create(req.body))
  );
}

function edit(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(Data.edit(req.params.id, req.body))
  );
}

function remove(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(Data.remove(req.params.id))
  );
}

export const handlers = [
  rest.get('https://6481a7ce29fa1c5c5031d1c7.mockapi.io/api/movies', getAll),
  rest.get('https://6481a7ce29fa1c5c5031d1c7.mockapi.io/api/movies/:id', getById),
  rest.post('https://6481a7ce29fa1c5c5031d1c7.mockapi.io/api/movies', create),
  rest.put('https://6481a7ce29fa1c5c5031d1c7.mockapi.io/api/movies/:id', edit),
  rest.delete('https://6481a7ce29fa1c5c5031d1c7.mockapi.io/api/movies/:id', remove)
]
