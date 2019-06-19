@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
                
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
            </nav>

            <div class="card">
                <div class="card-header">APIs</div>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>First Brewed</th>
                        </tr>
                    </thead>
                    <tbody id="tbody"></tbody>
                </table>
                @include('layouts.component.modal')
            </div>
        </div>
    </div>
</div>



@endsection

@push('scripts')
    <script type="text/javascript" src="{{ asset('js/pagination.js') }}"></script>
@endpush
