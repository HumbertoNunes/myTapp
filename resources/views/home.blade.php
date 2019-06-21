@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
                
            <div class="form-row">

                <div class="form-group col-md-2">

                    <select id="inputState" class="form-control show-entries">
                        <option selected disabled>Selecione...</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                    </select>
                </div>

                <div class="form-group col-md-2">
                    <nav aria-label="Page navigation">
                        <ul class="pagination pagination-list"></ul>
                    </nav>
                </div>
            </div>

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
    <script type="text/javascript" src="{{ asset('js/events.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/pagination.js') }}"></script>
@endpush
