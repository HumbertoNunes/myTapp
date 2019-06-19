@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
                
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
            </nav>

            <div class="card">
                <div class="card-header">APIs</div>

                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>nome</th>
                            <th>descrição</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        <tr>
                            <td>1</td>
                            <td>Skarlof</td>
                            <td>Cerveja do Brasil</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
@endsection
